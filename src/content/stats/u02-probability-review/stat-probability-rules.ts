import type { Lesson } from '../../types';

// Deterministic pseudo-random sequence (mulberry32) for the running-frequency graph.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
// Simulated inspections: draw 2 radios without replacement from a lot of 50 with 4 defective.
// Record the running proportion of inspections that find at least one defective radio.
const rnd = mulberry32(2026);
const runPath: [number, number][] = [];
{
  let hits = 0;
  for (let n = 1; n <= 2000; n++) {
    const first = rnd() < 4 / 50;
    const second = rnd() < (first ? 3 / 49 : 4 / 49);
    if (first || second) hits++;
    if (n <= 100 ? n % 2 === 0 : n % 10 === 0) runPath.push([n, hits / n]);
  }
}
const runSegments = runPath.slice(1).map((p, i) => ({ from: runPath[i], to: p, color: 'blue' as const }));

export const lesson: Lesson = {
  id: 'stat-probability-rules',
  title: 'Probability Rules Revisited',
  summary: 'A fast but rigorous return to the probability rules from Discrete Math, now in the language of data: interpretations of probability, two-way tables, conditional probability and the multiplication rule, independence versus mutual exclusivity, system reliability, the law of total probability and Simpson\'s paradox, checking answers by simulation in C++, and a first look at continuous sample spaces where probability is area.',
  minutes: 23,
  objectives: [
    'State the axioms of probability and contrast the frequentist and subjective interpretations',
    'Compute joint, marginal and conditional probabilities from a two-way table, and use the complement and addition rules',
    'Apply the multiplication rule, including sampling without replacement, and distinguish independence from mutual exclusivity',
    'Compute the reliability of series and parallel systems and explain when independence fails',
    'Use the law of total probability, and explain Simpson\'s paradox as a weighting effect',
    'Check a probability calculation by Monte Carlo simulation and judge the simulation\'s accuracy',
    'Compute probabilities in a continuous sample space as ratios of lengths or areas',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why statistics needs probability, and what probability means',
      blocks: [
        {
          type: 'p',
          text: 'Statistics reasons backward from data to models, but it can only do so because probability tells us, for each candidate model, how the data **should** behave. Every p-value, confidence interval and posterior in this course is a probability calculation. So this unit sharpens the toolkit you built in Discrete Math, with examples drawn from data.',
        },
        {
          type: 'p',
          text: 'The recap in one paragraph: a [[dm-sample-space|sample space]] $S$ lists the possible outcomes, an [[dm-event|event]] is a subset of $S$, and a probability $P$ assigns numbers to events following three axioms (Kolmogorov, 1933).',
        },
        {
          type: 'theorem',
          name: 'Axioms of probability',
          tex: '\\text{(1) } P(A) \\ge 0, \\qquad \\text{(2) } P(S) = 1, \\qquad \\text{(3) } P\\Big(\\bigcup_{i=1}^{\\infty} A_i\\Big) = \\sum_{i=1}^{\\infty} P(A_i) \\text{ for pairwise disjoint } A_1, A_2, \\dots',
          text: 'Axiom (3) is **countable** additivity. Discrete Math mostly needed finite unions; infinite ones appear as soon as a sample space is infinite — "the first crit happens on an even-numbered swing" is the disjoint union of infinitely many events, and its probability is the series $\\sum_{k \\text{ even}} (1-p)^{k-1}p$.',
        },
        {
          type: 'p',
          text: 'The axioms say how probabilities must behave, not what they **are**. Two interpretations dominate statistics, and you will meet both schools later in the course:',
        },
        {
          type: 'table',
          headers: ['Interpretation', 'P(A) means…', 'Natural for'],
          rows: [
            ['Classical', 'favorable outcomes / total, when outcomes are equally likely', 'dice, cards, shuffles'],
            ['Frequentist', 'the long-run relative frequency of $A$ in repeated trials: $P(A) = \\lim_{n \\to \\infty} n_A / n$', 'crit rates, drop rates, crash rates, repeatable experiments'],
            ['Subjective (Bayesian)', 'a degree of belief, expressed as the odds at which you would bet on $A$', 'one-off questions: "this build has a memory leak", "the wreck lies in sector B"'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why both interpretations obey the same rules',
          text: 'Relative frequencies satisfy the axioms automatically: $n_A/n \\ge 0$, $n_S/n = 1$, and if $A$ and $B$ never happen together then $n_{A \\cup B} = n_A + n_B$. Degrees of belief must satisfy them too, by the **Dutch book argument**: if your betting odds violate an axiom, a bookie can sell you a set of bets you consider fair that loses money **whatever** happens. So frequentists and Bayesians compute with identical rules; they disagree about which questions probability may be applied to — and that shapes how they do inference (Units 7–8 versus Unit 11).',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which statement is naturally a **subjective** (degree-of-belief) probability rather than a long-run frequency?',
      options: [
        { text: '"The rifle\'s critical-hit chance is $15\\%$."', why: 'Crits repeat millions of times; $15\\%$ is a long-run frequency the code is designed to produce, and telemetry can check it.' },
        { text: '"About $2\\%$ of sessions on this build crash."', why: 'A crash rate is a relative frequency over many sessions — the frequentist interpretation fits perfectly.' },
        { text: '"There is a $70\\%$ chance the desync bug is in the netcode rather than the physics."', correct: true, why: 'The bug is in one place or the other; there is no sequence of repeated trials. The $70\\%$ expresses the engineer\'s belief given the evidence so far — a subjective probability, which should be updated as evidence arrives (next lesson: Bayes).' },
        { text: '"A fair die shows a six with probability $1/6$."', why: 'Classical (and frequentist): six equally likely faces, and in many rolls about one in six is a six.' },
      ],
      explanation: 'Frequentist probabilities need a repeatable process. "Where is this particular bug?" has a fixed but unknown answer, so a probability for it can only describe uncertainty in someone\'s knowledge. Statisticians use both kinds; Bayesian inference (Unit 11) treats unknown parameters exactly this way.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Complements, unions and two-way tables',
      blocks: [
        {
          type: 'p',
          text: 'Two consequences of the axioms do most of the everyday work. Since $A$ and $\\overline{A}$ are disjoint with union $S$, $P(\\overline{A}) = 1 - P(A)$. And splitting $A \\cup B$ into disjoint pieces gives the addition rule, with the overlap subtracted once because it was counted twice:',
        },
        {
          type: 'theorem',
          name: 'Complement and addition rules',
          tex: 'P(\\overline{A}) = 1 - P(A), \\qquad P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
          text: 'For three events (inclusion–exclusion): $P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$.',
        },
        {
          type: 'p',
          text: 'In statistics, probabilities for two categorical variables usually come from a [[stat-contingency-table|two-way (contingency) table]] of counts. A survey of $2{,}000$ randomly sampled players records platform and whether they bought the season\'s battle pass:',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 245" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="56" width="475" height="40" rx="4" class="f-blue" fill-opacity="0.14"/><rect x="209" y="14" width="102" height="160" rx="6" fill="none" class="s-orange" stroke-width="2"/><text x="122.5" y="40" text-anchor="middle" font-size="14" font-weight="600"></text><text x="260.0" y="40" text-anchor="middle" font-size="14" font-weight="600">Bought pass</text><text x="370.0" y="40" text-anchor="middle" font-size="14" font-weight="600">No pass</text><text x="470.0" y="40" text-anchor="middle" font-size="14" font-weight="600">Total</text><text x="122.5" y="80" text-anchor="middle" font-size="14" font-weight="600">PC</text><text x="260.0" y="80" text-anchor="middle" font-size="14" class="t-purple" font-weight="700">420</text><text x="370.0" y="80" text-anchor="middle" font-size="14">780</text><text x="470.0" y="80" text-anchor="middle" font-size="14">1200</text><text x="122.5" y="120" text-anchor="middle" font-size="14" font-weight="600">Console</text><text x="260.0" y="120" text-anchor="middle" font-size="14">360</text><text x="370.0" y="120" text-anchor="middle" font-size="14">440</text><text x="470.0" y="120" text-anchor="middle" font-size="14">800</text><text x="122.5" y="160" text-anchor="middle" font-size="14" font-weight="600">Total</text><text x="260.0" y="160" text-anchor="middle" font-size="14">780</text><text x="370.0" y="160" text-anchor="middle" font-size="14">1220</text><text x="470.0" y="160" text-anchor="middle" font-size="14">2000</text><line x1="40" y1="50" x2="515" y2="50" stroke="currentColor" stroke-width="1.2"/><line x1="40" y1="136" x2="515" y2="136" stroke="currentColor" stroke-width="1.2"/><line x1="425" y1="20" x2="425" y2="170" stroke="currentColor" stroke-width="1.2"/><text x="40" y="208" font-size="13" class="t-blue">P(bought | PC) = 420 / 1200 = 0.35   (stay in the PC row)</text><text x="40" y="232" font-size="13" class="t-orange">P(PC | bought) = 420 / 780 ≈ 0.54   (stay in the Bought column)</text></svg>', // fig:twoway
          alt: 'A two-way table. Rows: PC (420 bought the pass, 780 did not, total 1200), Console (360 bought, 440 did not, total 800), Total (780 bought, 1220 did not, 2000 overall). The PC row is shaded blue and the Bought pass column is outlined in orange; the cell 420 is highlighted. Below: P(bought given PC) = 420/1200 = 0.35, stay in the PC row; P(PC given bought) = 420/780, about 0.54, stay in the Bought column.',
          caption: 'Inner cells give **joint** probabilities ($P(\\text{PC} \\cap \\text{bought}) = 420/2000 = 0.21$); the margins give **marginal** probabilities ($P(\\text{PC}) = 0.6$, $P(\\text{bought}) = 0.39$). The colored formulas preview the next card.',
          maxWidth: 520,
        },
        {
          type: 'derivation',
          title: 'P(PC or bought) two ways',
          steps: [
            { tex: 'P(\\text{PC} \\cup \\text{bought}) = \\frac{1200}{2000} + \\frac{780}{2000} - \\frac{420}{2000}', why: 'Addition rule: the $420$ PC buyers are in both the PC row and the bought column, so subtract them once.' },
            { tex: '= \\frac{1560}{2000} = 0.78', why: 'Arithmetic.' },
            { tex: '\\text{check: } 1 - P(\\text{console} \\cap \\text{no pass}) = 1 - \\frac{440}{2000} = 0.78', why: 'The complement of "PC or bought" is "neither": console players without the pass. Two routes, one answer.' },
          ],
          result: 'In a table, the complement route is often the fastest: find the one cell that is outside the event.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'In last week\'s crash reports, $40\\%$ mention the GPU driver, $25\\%$ mention running out of memory, and $10\\%$ mention both. What proportion of reports mention **neither**? Give a decimal.',
      hint: 'First $P(G \\cup M)$ by the addition rule, then the complement.',
      label: '$P(\\text{neither}) =$',
      answer: '1 - (0.40 + 0.25 - 0.10)',
      answerTex: '0.45',
      explanation: '$P(G \\cup M) = 0.40 + 0.25 - 0.10 = 0.55$, so $P(\\text{neither}) = 1 - 0.55 = 0.45$. Forgetting to subtract the overlap gives $1 - 0.65 = 0.35$, which double-counts the $10\\%$ of reports that mention both.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Conditional probability and the multiplication rule',
      blocks: [
        {
          type: 'p',
          text: 'The [[dm-conditional-probability|conditional probability]] $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$ (for $P(B) > 0$) restricts attention to the outcomes where $B$ happened. In a two-way table that is literally "stay in one row (or column) and use its total as the denominator".',
        },
        {
          type: 'derivation',
          title: 'Conditioning in the battle-pass table',
          steps: [
            { tex: 'P(\\text{bought} \\mid \\text{PC}) = \\frac{420}{1200} = 0.35', why: 'Stay in the PC row: of $1200$ PC players, $420$ bought.' },
            { tex: 'P(\\text{bought} \\mid \\text{console}) = \\frac{360}{800} = 0.45', why: 'Stay in the console row. Console players buy at a higher rate.' },
            { tex: 'P(\\text{PC} \\mid \\text{bought}) = \\frac{420}{780} = \\frac{7}{13} \\approx 0.54', why: 'Stay in the bought column: of $780$ buyers, $420$ are on PC.' },
          ],
          result: '$P(\\text{bought} \\mid \\text{PC}) = 0.35$ but $P(\\text{PC} \\mid \\text{bought}) \\approx 0.54$. Conditioning is **not symmetric**. Most PC players do not buy, yet most buyers are on PC — because there are more PC players. Confusing the two directions is the base-rate fallacy of the next lesson.',
        },
        {
          type: 'p',
          text: 'Rearranging the definition gives the **multiplication rule** $P(A \\cap B) = P(A)\\,P(B \\mid A)$, and for a chain of events $P(A_1 \\cap A_2 \\cap A_3) = P(A_1)P(A_2 \\mid A_1)P(A_3 \\mid A_1 \\cap A_2)$. It is the natural tool for sampling **without replacement**, where each draw changes what is left.',
        },
        {
          type: 'derivation',
          title: 'Acceptance sampling: inspecting a lot of radios',
          steps: [
            { tex: '\\text{lot: } 50 \\text{ radios, } 4 \\text{ defective; inspect } 2 \\text{ at random, without replacement}', why: 'Quality control in the military and in manufacturing: test a few units and accept or reject the whole lot.' },
            { tex: 'P(\\text{both good}) = \\frac{46}{50} \\cdot \\frac{45}{49} = \\frac{2070}{2450}', why: 'Multiplication rule: $46$ of $50$ are good for the first draw; given that, $45$ of the remaining $49$ are good.' },
            { tex: 'P(\\text{at least one defective}) = 1 - \\frac{2070}{2450} = \\frac{380}{2450} \\approx 0.155', why: 'Complement of "both good". "At least one" is almost always easiest through the complement.' },
          ],
          result: 'Inspecting $2$ of $50$ catches a lot with $4$ bad radios only about $15.5\\%$ of the time — the reason real acceptance-sampling plans inspect many more units. (Sampling with versus without replacement is the difference between the binomial and hypergeometric distributions of Unit 3.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Which way does the bar go?',
          text: '$P(A \\mid B)$ has $B$ as the **given** — the denominator. Read it as "the probability of $A$, among cases with $B$". When a sentence says "of players who bought, $54\\%$ are on PC", the given is "bought". Writing the condition on the wrong side is the single most common error in probability word problems.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Using the battle-pass table (PC: $420$ bought, $780$ not; console: $360$ bought, $440$ not), find $P(\\text{console} \\mid \\text{bought})$. Exact fraction or $4$ decimal places.',
      hint: 'Stay in the "bought" column. How many buyers are there in total?',
      label: '$P(\\text{console} \\mid \\text{bought}) =$',
      answer: '360/780',
      answerTex: '\\tfrac{6}{13} \\approx 0.4615',
      minDecimals: 4,
      explanation: 'The condition "bought" restricts us to the $420 + 360 = 780$ buyers, of whom $360$ are on console: $360/780 = 6/13 \\approx 0.4615$. Note this is not $P(\\text{bought} \\mid \\text{console}) = 360/800 = 0.45$ — same numerator, different denominator. As a check, $P(\\text{PC} \\mid \\text{bought}) + P(\\text{console} \\mid \\text{bought}) = 7/13 + 6/13 = 1$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Independence versus mutual exclusivity, and system reliability',
      blocks: [
        {
          type: 'definition',
          term: 'Independent vs mutually exclusive',
          text: 'Events $A$ and $B$ are [[dm-independent-events|independent]] if $P(A \\cap B) = P(A)P(B)$, equivalently $P(A \\mid B) = P(A)$ when $P(B) > 0$: knowing $B$ happened does not change the chance of $A$. They are [[stat-mutually-exclusive|mutually exclusive]] (disjoint) if $A \\cap B = \\varnothing$: they cannot both happen.',
        },
        {
          type: 'p',
          text: 'In the battle-pass table, $P(\\text{PC})P(\\text{bought}) = 0.6 \\times 0.39 = 0.234$, but $P(\\text{PC} \\cap \\text{bought}) = 0.21$. Not equal, so platform and purchasing are **dependent** — as the different row rates ($0.35$ vs $0.45$) already showed. (Whether a gap that size could be sampling noise is a chi-square question, Unit 9.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Disjoint events (with positive probability) are always dependent',
          text: 'If $A$ and $B$ are mutually exclusive, $P(A \\cap B) = 0$. If both have positive probability, $P(A)P(B) > 0 \\ne 0$, so they are **not** independent. Intuitively, disjointness is the strongest possible dependence: learning that $A$ happened tells you for certain that $B$ did not. A match cannot end in both a win and a loss, and knowing it was a win changes $P(\\text{loss})$ from, say, $0.48$ to $0$.',
        },
        {
          type: 'p',
          text: 'Independence is the assumption behind most of statistics: data values $X_1, \\dots, X_n$ that are **i.i.d.** (independent and identically distributed). Random sampling with replacement gives exact independence; sampling a few hundred players from millions without replacement is independent to an excellent approximation. Engineers use independence to compute the **reliability** of systems built from components:',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg"><text x="10" y="22" font-size="13" font-weight="600">Series: every part must work</text><line x1="10" y1="58" x2="40" y2="58" stroke="currentColor" stroke-width="1.6"/><rect x="40" y="38" width="96" height="40" rx="7" fill="none" class="s-blue" stroke-width="1.6"/><text x="88" y="55" text-anchor="middle" font-size="12.5">Radio</text><text x="88" y="71" text-anchor="middle" font-size="11.5" class="t-gray">r = 0.95</text><line x1="136" y1="58" x2="176" y2="58" stroke="currentColor" stroke-width="1.6"/><rect x="176" y="38" width="96" height="40" rx="7" fill="none" class="s-blue" stroke-width="1.6"/><text x="224" y="55" text-anchor="middle" font-size="12.5">Amplifier</text><text x="224" y="71" text-anchor="middle" font-size="11.5" class="t-gray">r = 0.98</text><line x1="272" y1="58" x2="312" y2="58" stroke="currentColor" stroke-width="1.6"/><rect x="312" y="38" width="96" height="40" rx="7" fill="none" class="s-blue" stroke-width="1.6"/><text x="360" y="55" text-anchor="middle" font-size="12.5">Antenna</text><text x="360" y="71" text-anchor="middle" font-size="11.5" class="t-gray">r = 0.99</text><line x1="408" y1="58" x2="440" y2="58" stroke="currentColor" stroke-width="1.6"/><text x="445" y="56" font-size="12">R = 0.95 · 0.98</text><text x="445" y="72" font-size="12">· 0.99 ≈ 0.922</text><text x="10" y="128" font-size="13" font-weight="600">Redundant radios in parallel: at least one must work</text><line x1="10" y1="195" x2="25" y2="195" stroke="currentColor" stroke-width="1.6"/><line x1="25" y1="170" x2="25" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="25" y1="170" x2="40" y2="170" stroke="currentColor" stroke-width="1.6"/><line x1="25" y1="220" x2="40" y2="220" stroke="currentColor" stroke-width="1.6"/><rect x="40" y="150" width="96" height="40" rx="7" fill="none" class="s-green" stroke-width="1.6"/><text x="88" y="167" text-anchor="middle" font-size="12.5">Radio 1</text><text x="88" y="183" text-anchor="middle" font-size="11.5" class="t-gray">r = 0.95</text><rect x="40" y="200" width="96" height="40" rx="7" fill="none" class="s-green" stroke-width="1.6"/><text x="88" y="217" text-anchor="middle" font-size="12.5">Radio 2</text><text x="88" y="233" text-anchor="middle" font-size="11.5" class="t-gray">r = 0.95</text><line x1="136" y1="170" x2="151" y2="170" stroke="currentColor" stroke-width="1.6"/><line x1="136" y1="220" x2="151" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="151" y1="170" x2="151" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="151" y1="195" x2="176" y2="195" stroke="currentColor" stroke-width="1.6"/><rect x="176" y="175" width="96" height="40" rx="7" fill="none" class="s-blue" stroke-width="1.6"/><text x="224" y="192" text-anchor="middle" font-size="12.5">Amplifier</text><text x="224" y="208" text-anchor="middle" font-size="11.5" class="t-gray">r = 0.98</text><line x1="272" y1="195" x2="312" y2="195" stroke="currentColor" stroke-width="1.6"/><rect x="312" y="175" width="96" height="40" rx="7" fill="none" class="s-blue" stroke-width="1.6"/><text x="360" y="192" text-anchor="middle" font-size="12.5">Antenna</text><text x="360" y="208" text-anchor="middle" font-size="11.5" class="t-gray">r = 0.99</text><line x1="408" y1="195" x2="440" y2="195" stroke="currentColor" stroke-width="1.6"/><text x="445" y="178" font-size="12">R = (1 − 0.05²)</text><text x="445" y="194" font-size="12">· 0.98 · 0.99</text><text x="445" y="210" font-size="12">≈ 0.968</text></svg>', // fig:reliability
          alt: 'Two reliability block diagrams. Series: Radio (r = 0.95), Amplifier (r = 0.98) and Antenna (r = 0.99) in a chain; R = 0.95 times 0.98 times 0.99, about 0.922. Parallel: two radios (each r = 0.95) side by side, feeding the amplifier and antenna in series; R = (1 minus 0.05 squared) times 0.98 times 0.99, about 0.968.',
          caption: 'A series system works only if every block works; a parallel block works if at least one branch works. Doubling the weakest link (the radio) lifts the system from $92.2\\%$ to $96.8\\%$.',
          maxWidth: 520,
        },
        {
          type: 'derivation',
          title: 'Series and parallel reliability',
          steps: [
            { tex: 'R_{\\text{series}} = P(C_1 \\cap C_2 \\cap C_3) = r_1 r_2 r_3 = 0.95 \\cdot 0.98 \\cdot 0.99 \\approx 0.922', why: 'All components must work; with independent failures, multiply.' },
            { tex: 'R_{\\text{parallel}} = 1 - P(\\overline{C_1} \\cap \\overline{C_2}) = 1 - (1 - r)^2 = 1 - 0.05^2 = 0.9975', why: 'The pair fails only if **both** radios fail. Complement, then independence of the two failures.' },
            { tex: 'R = 0.9975 \\cdot 0.98 \\cdot 0.99 \\approx 0.968', why: 'The redundant radio pair is one block in series with the amplifier and antenna.' },
          ],
          result: 'Redundancy works because two independent failures are much rarer than one ($0.0025$ versus $0.05$).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Common-cause failures break independence',
          text: 'If both radios share a battery, get soaked by the same river crossing, or run the same buggy firmware, their failures are positively dependent and $1 - (1-r)^2$ is wildly optimistic. The same goes for "redundant" servers in one data center or one cloud region. Real reliability engineering spends most of its effort hunting these common causes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'If two events with positive probability are mutually exclusive, then they are independent.',
      answer: false,
      explanation: 'Mutually exclusive means $P(A \\cap B) = 0$, while independence requires $P(A \\cap B) = P(A)P(B)$, which is positive when both probabilities are positive. So disjoint events with positive probability are always **dependent**: knowing one occurred rules the other out. Example: on one roll of a die, "even" and "odd" are disjoint, and $P(\\text{even} \\mid \\text{odd}) = 0 \\ne 1/2$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A game service runs on two redundant servers, each up (independently) with probability $0.97$, behind a single load balancer that is up with probability $0.995$. The service is available if the load balancer is up **and** at least one server is up. What is the availability? Give $4$ decimal places.',
      hint: 'Parallel block: $1 - (1 - 0.97)^2$. Then series with the load balancer.',
      label: '$R =$',
      answer: '(1 - 0.03^2)*0.995',
      answerTex: '0.9941',
      tolerance: 0.00005,
      explanation: 'Both servers down: $0.03^2 = 0.0009$, so the server pair is up with probability $0.9991$. In series with the load balancer: $0.9991 \\times 0.995 \\approx 0.9941$. Notice that the single load balancer now dominates the downtime ($0.5\\%$ versus $0.09\\%$): the next engineering dollar should buy a second load balancer, not a third server.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The law of total probability and Simpson\'s paradox',
      blocks: [
        {
          type: 'theorem',
          name: 'Law of total probability',
          tex: 'P(A) = \\sum_{i=1}^{k} P(A \\mid B_i)\\,P(B_i)',
          text: 'for any [[dm-partition|partition]] $B_1, \\dots, B_k$ of the sample space (disjoint events with positive probabilities whose union is $S$). Proof: $A$ is the disjoint union of the pieces $A \\cap B_i$, and $P(A \\cap B_i) = P(A \\mid B_i)P(B_i)$.',
        },
        {
          type: 'p',
          text: 'Read it as: **an overall rate is a weighted average of group rates, weighted by group sizes.** That is the [[stat-law-of-total-probability|law of total probability]], and you already used it to combine strata in Unit 1.',
        },
        {
          type: 'derivation',
          title: 'Overall crash rate across hardware tiers',
          steps: [
            { tex: 'P(\\text{low}) = 0.2,\\ P(\\text{mid}) = 0.5,\\ P(\\text{high}) = 0.3', why: 'The tiers partition the player base.' },
            { tex: 'P(C \\mid \\text{low}) = 0.05,\\ P(C \\mid \\text{mid}) = 0.02,\\ P(C \\mid \\text{high}) = 0.01', why: 'Crash rate per session within each tier.' },
            { tex: 'P(C) = 0.05(0.2) + 0.02(0.5) + 0.01(0.3) = 0.010 + 0.010 + 0.003 = 0.023', why: 'Weighted average of the tier rates. Note the low tier is only $20\\%$ of players but causes $0.010/0.023 \\approx 43\\%$ of crashes — a Bayes-style backward question.' },
          ],
          result: 'About $2.3\\%$ of sessions crash. The answer must lie between the smallest and largest group rate ($1\\%$ and $5\\%$), a quick sanity check.',
        },
        {
          type: 'heading',
          text: 'Simpson\'s paradox: when the weights differ',
        },
        {
          type: 'table',
          headers: ['Character', 'Low-skill matches', 'High-skill matches', 'Overall'],
          rows: [
            ['A', '$240/800 = 30\\%$', '$144/200 = 72\\%$', '$384/1000 = 38.4\\%$'],
            ['B', '$55/200 = 27.5\\%$', '$560/800 = 70\\%$', '$615/1000 = 61.5\\%$'],
          ],
          caption: 'Character A wins more often than B in **each** skill bracket, yet far less often overall.',
        },
        {
          type: 'p',
          text: 'No arithmetic is wrong. By the law of total probability, each overall rate is a weighted average of its bracket rates — but with **different weights**: $80\\%$ of A\'s matches are low-skill, $80\\%$ of B\'s are high-skill. Skill bracket is a confounder (Unit 1): it affects both which character is played and who wins. This is [[stat-simpsons-paradox|Simpson\'s paradox]], and balance dashboards fall into it constantly. The fair comparison here is within brackets; in general, decide which grouping is causally relevant before aggregating.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Matchmaking puts a player against a stronger team in $25\\%$ of matches, an even team in $50\\%$, and a weaker team in $25\\%$. Her win probabilities against those are $0.30$, $0.50$ and $0.75$. What is her overall win probability? Give $4$ decimal places.',
      hint: 'Law of total probability: $\\sum P(\\text{win} \\mid B_i)P(B_i)$.',
      label: '$P(\\text{win}) =$',
      answer: '0.25*0.30 + 0.5*0.5 + 0.25*0.75',
      answerTex: '0.5125',
      tolerance: 0.00005,
      explanation: '$P(\\text{win}) = 0.30(0.25) + 0.50(0.50) + 0.75(0.25) = 0.075 + 0.250 + 0.1875 = 0.5125$. The opponent types partition her matches, so the law applies. A win rate slightly above $50\\%$ is what a well-calibrated rating system aims for while a player is climbing.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'An analyst computes the overall session crash rate. Players are $10\\%$ low-tier, $30\\%$ mid-tier and $60\\%$ high-tier; crash rates are $6\\%$, $3\\%$ and $1\\%$. Tap the first wrong line.',
      lines: [
        'The tiers are disjoint and cover all players, so they form a partition.',
        '$P(C \\mid \\text{low}) = 0.06$, $P(C \\mid \\text{mid}) = 0.03$, $P(C \\mid \\text{high}) = 0.01$.',
        '$P(C) = \\dfrac{0.06 + 0.03 + 0.01}{3} \\approx 0.0333$.',
        'So about $3.3\\%$ of sessions crash.',
      ],
      errorLines: [3],
      explanation: 'Line 3 averages the three rates as if the tiers were equally large. The law of total probability weights each rate by its tier\'s share: $P(C) = 0.06(0.10) + 0.03(0.30) + 0.01(0.60) = 0.006 + 0.009 + 0.006 = 0.021$. So about $2.1\\%$ of sessions crash. The unweighted average overstates it because the crash-prone low tier is small.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Simulation as a check',
      blocks: [
        {
          type: 'p',
          text: 'The frequentist interpretation suggests a test for any calculation: simulate the experiment many times and compare the relative frequency with your answer. This is the [[dm-monte-carlo|Monte Carlo method]] from Discrete Math, and it is worth a habit: whenever a probability matters (a drop rate, a matchmaking rule, a reliability claim), check it by simulation. Errors in the math and bugs in the simulation rarely agree by accident.',
        },
        {
          type: 'graph',
          x: [0, 2000],
          y: [0, 0.4],
          xStep: 250,
          yStep: 0.05,
          height: 270,
          segments: runSegments,
          functions: [
            { expr: '0.1551 + 2sqrt(0.1551*0.8449/x)', color: 'gray', dashed: true, domain: [20, 2000] },
            { expr: '0.1551 - 2sqrt(0.1551*0.8449/x)', color: 'gray', dashed: true, domain: [20, 2000] },
          ],
          hlines: [{ y: 0.1551, label: 'exact 0.1551', color: 'orange' }],
          caption: 'The running proportion of simulated inspections that find a defective radio (blue), after $n$ inspections. It wanders a lot early, then settles toward the exact $380/2450 \\approx 0.1551$. The dashed band, $p \\pm 2\\sqrt{p(1-p)/n}$, shows how far a proportion typically strays: the error shrinks like $1/\\sqrt{n}$ (the law of large numbers, Unit 6).',
        },
        {
          type: 'code',
          title: 'check_by_simulation.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(1);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }   // uniform in [0, 1)
bool works(double r) { return uniform01() < r; }            // component works with prob r

// One inspection: draw 2 radios without replacement from a lot of 50 with 4 defective.
bool inspectionFindsDefect() {
    bool first = uniform01() < 4.0 / 50;                     // P(first defective) = 4/50
    double pSecond = first ? 3.0 / 49 : 4.0 / 49;            // conditional on the first draw
    bool second = uniform01() < pSecond;
    return first || second;
}

// One mission: two radios in parallel, then amplifier and antenna in series.
bool linkWorks() {
    bool radioStage = works(0.95) || works(0.95);
    return radioStage && works(0.98) && works(0.99);
}

int main() {
    const double exactDefect = 1 - (46.0 / 50) * (45.0 / 49);
    const double exactLink = (1 - 0.05 * 0.05) * 0.98 * 0.99;
    for (long long N : {100LL, 10'000LL, 1'000'000LL}) {
        long long defect = 0, link = 0;
        for (long long i = 0; i < N; ++i) {
            defect += inspectionFindsDefect();
            link += linkWorks();
        }
        double p1 = double(defect) / N, p2 = double(link) / N;
        std::printf("N = %7lld   P(defect found) ~ %.4f (+/- %.4f)   P(link works) ~ %.4f (+/- %.4f)\\n",
                    N, p1, std::sqrt(p1 * (1 - p1) / N), p2, std::sqrt(p2 * (1 - p2) / N));
    }
    std::printf("exact          P(defect found) = %.4f              P(link works) = %.4f\\n", exactDefect, exactLink);
}`,
          output: `N =     100   P(defect found) ~ 0.0700 (+/- 0.0255)   P(link works) ~ 0.9600 (+/- 0.0196)
N =   10000   P(defect found) ~ 0.1490 (+/- 0.0036)   P(link works) ~ 0.9700 (+/- 0.0017)
N = 1000000   P(defect found) ~ 0.1555 (+/- 0.0004)   P(link works) ~ 0.9677 (+/- 0.0002)
exact          P(defect found) = 0.1551              P(link works) = 0.9678`,
          annotations: [
            { lines: '10-15', text: 'The simulation follows the multiplication rule literally: draw the first radio, then draw the second with the **conditional** probability given the first.' },
            { lines: '18-21', text: '`||` and `&&` mirror the reliability diagram: parallel is "or", series is "and". Independence comes from using fresh random numbers for each component.' },
            { lines: '32-34', text: 'The $\\pm$ figure is the estimated standard error $\\sqrt{\\hat{p}(1-\\hat{p})/N}$. At $N = 100$ the estimate $0.07$ is far off; at $N = 10^6$ both estimates are within about one standard error of the exact values.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How many trials do you need?',
          text: 'The standard error of a simulated probability is about $\\sqrt{p(1-p)/N}$. To pin down a probability near $0.15$ to $\\pm 0.001$ (two standard errors), you need $2\\sqrt{0.15 \\cdot 0.85/N} \\le 0.001$, i.e. $N \\ge 4 \\cdot 0.1275 / 10^{-6} = 510{,}000$ trials. Each extra decimal digit costs $100$ times more trials, so simulation is a superb check and a poor substitute for exact math when precision matters.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps of checking a probability calculation by Monte Carlo simulation in order.',
      lines: [
        'Write code that performs one random trial of the experiment exactly by its rules, using a seeded generator so the run can be reproduced.',
        'Repeat the trial $N$ times and count how often the event occurs.',
        'Estimate $P(A) \\approx (\\text{count})/N$, with standard error about $\\sqrt{\\hat{p}(1-\\hat{p})/N}$.',
        'Compare with the calculated value: a gap of more than a few standard errors means a bug in the math or in the code.',
      ],
      distractors: ['Increase $N$ until the estimate exactly equals the calculated value.'],
      explanation: 'Model one trial faithfully, make the run reproducible, repeat, estimate, compare — judging the gap in units of standard error. The distractor is a trap: a simulated proportion essentially never equals the exact value, and its error only shrinks like $1/\\sqrt{N}$; "agreement" means "within a few standard errors".',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Continuous sample spaces: probability as area',
      blocks: [
        {
          type: 'p',
          text: 'So far the sample spaces were finite or countable. Many statistical quantities are continuous: a respawn position along a $10$ m corridor, a reaction time, a latency. Then no list of outcome probabilities can work — there are uncountably many outcomes, and each single one has probability $0$. Instead, probability is spread out like mass, and events get probability by **length**, **area** or, in general, an [[definite-integral|integral]].',
        },
        {
          type: 'p',
          text: 'The simplest case is **uniform** choice: if a point is chosen uniformly from a region $R$, then $P(A) = \\text{size}(A)/\\text{size}(R)$ for any event $A$ inside $R$. This is [[stat-geometric-probability|geometric probability]]. In particular $P(X = 7.000\\ldots) = 0$ for any exact value — impossible to "hit" exactly, yet not impossible to occur. Probability zero does not mean impossible.',
        },
        {
          type: 'derivation',
          title: 'Two squadmates log in at random times: do they overlap?',
          steps: [
            { tex: 'X, Y \\sim \\text{independent, uniform on } [0, 60] \\text{ minutes}', why: 'Each logs in at a uniformly random minute of the hour, independently; the point $(X, Y)$ is uniform on the $60 \\times 60$ square.' },
            { tex: '\\text{meet} \\iff |X - Y| \\le 15', why: 'Each waits $15$ minutes for the other. The event is the diagonal band between the lines $y = x - 15$ and $y = x + 15$.' },
            { tex: '\\text{area outside the band} = 2 \\cdot \\tfrac{1}{2} \\cdot 45^2 = 2025', why: 'Outside the band are two right triangles with legs $60 - 15 = 45$.' },
            { tex: 'P(\\text{meet}) = 1 - \\frac{2025}{3600} = 1 - \\left(\\frac{45}{60}\\right)^2 = \\frac{7}{16} = 0.4375', why: 'Area of the band divided by the area of the square.' },
          ],
          result: 'With a wait of $w$ minutes, $P(\\text{meet}) = 1 - \\left(1 - \\frac{w}{60}\\right)^2$. Try it below.',
        },
        {
          type: 'graph',
          x: [0, 60],
          y: [0, 60],
          xStep: 10,
          yStep: 10,
          equal: true,
          areas: [{ expr: 'min(x + w, 60)', expr2: 'max(x - w, 0)', from: 0, to: 60, color: 'green' }],
          functions: [
            { expr: 'x + w', color: 'green', domain: [0, '60 - w'] },
            { expr: 'x - w', color: 'green', domain: ['w', 60] },
          ],
          segments: [
            { from: [0, 60], to: [60, 60], color: 'gray' },
            { from: [60, 0], to: [60, 60], color: 'gray' },
          ],
          sliders: [{ name: 'w', min: 0, max: 60, step: 1, value: 15, label: 'waiting time $w$ (minutes)' }],
          readouts: [{ label: '$P(|X - Y| \\le w) = 1 - (1 - w/60)^2 =$', expr: '1 - (1 - w/60)^2', digits: 4 }],
          caption: 'The square is every possible pair of login times $(X, Y)$; the green band is "they overlap". Probability is the band\'s share of the square\'s area. At $w = 0$ the band is the diagonal line itself — an event with probability $0$ that can still happen.',
        },
        {
          type: 'p',
          text: 'Non-uniform continuous models replace "area" with "area under a density curve": $P(a \\le X \\le b) = \\int_a^b f_X(x)\\,dx$ for a density $f_X$. That is the subject of Unit 4, where your integration skills from Calculus become probability skills.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'Two squadmates log in at independent, uniformly random times within the same hour, and each waits $10$ minutes for the other. What is the probability that they meet? Exact fraction or $4$ decimal places.',
      hint: '$P = 1 - \\left(1 - \\frac{w}{60}\\right)^2$ with $w = 10$.',
      label: '$P(\\text{meet}) =$',
      answer: '11/36',
      answerTex: '\\tfrac{11}{36} \\approx 0.3056',
      minDecimals: 4,
      explanation: 'Outside the band $|X - Y| \\le 10$ lie two right triangles with legs $50$, total area $50^2 = 2500$ of the square\'s $3600$. So $P = 1 - \\frac{2500}{3600} = 1 - \\frac{25}{36} = \\frac{11}{36} \\approx 0.3056$. A common mistake is $\\frac{2 \\cdot 10}{60} = \\frac{1}{3}$, which ignores that the band is cut off at the corners of the square.',
    },
  ],
  takeaways: [
    'Axioms: $P(A) \\ge 0$, $P(S) = 1$, countable additivity. Frequentist (long-run frequency) and subjective (degree of belief) probabilities obey the same rules.',
    '$P(\\overline{A}) = 1 - P(A)$; $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. In a two-way table, inner cells are joint and margins are marginal probabilities.',
    '$P(A \\mid B) = P(A \\cap B)/P(B)$: stay in the $B$ row or column. Conditioning is not symmetric. Multiplication rule: $P(A \\cap B) = P(A)P(B \\mid A)$, ideal for sampling without replacement.',
    'Independent: $P(A \\cap B) = P(A)P(B)$. Mutually exclusive events with positive probability are dependent. Series reliability $\\prod r_i$; parallel $1 - \\prod (1 - r_i)$ — unless common causes link failures.',
    'Law of total probability: an overall rate is the group rates weighted by group sizes. Different weights cause Simpson\'s paradox.',
    'Check probabilities by simulation; the error of a simulated proportion is about $\\sqrt{p(1-p)/N}$.',
    'For a uniform point in a region, probability $=$ area ratio; single points have probability $0$. Densities and integrals generalize this in Unit 4.',
  ],
  reading: [
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'Readings 1–3 review counting, probability, conditional probability and independence at exactly this level, with R simulations instead of C++.',
    },
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'Chapter 3 (Probability Topics) has many two-way table and tree problems for practice.',
    },
    {
      title: 'Wikipedia — Simpson\'s paradox',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      source: 'wikipedia',
      note: 'Famous real cases (the Berkeley admissions data, kidney-stone treatments) and the causal reasoning needed to decide which table to trust.',
    },
    {
      title: 'Seeing Theory — Brown University',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'The "Basic Probability" and "Compound Probability" chapters animate the frequentist interpretation and conditional probability.',
    },
  ],
};
