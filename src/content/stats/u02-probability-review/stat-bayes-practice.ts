import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'stat-bayes-practice',
  title: 'Bayes\' Theorem in Practice',
  summary: 'Bayes\' theorem as a working tool: the base-rate fallacy, diagnostic tests (sensitivity, specificity, PPV and NPV, and why prevalence changes everything), the odds form with likelihood ratios, sequential updating and Bayesian search, naive Bayes spam filtering in C++, and anti-cheat detection with thresholds, costs and ROC curves.',
  minutes: 23,
  objectives: [
    'Use Bayes\' theorem and natural-frequency trees to find posterior probabilities, and recognize the base-rate fallacy',
    'Define sensitivity, specificity, PPV and NPV, compute them from a 2×2 table, and explain how predictive values depend on prevalence',
    'Update odds with likelihood ratios, including several independent pieces of evidence, and work in log-odds',
    'Apply Bayesian updating to search problems and to naive Bayes classification',
    'Reason about detection thresholds: the sensitivity–specificity trade-off, ROC curves, and choosing a threshold from the costs of errors',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Bayes\' theorem as a statistics tool',
      blocks: [
        {
          type: 'p',
          text: 'In Discrete Math you derived [[dm-bayes-theorem|Bayes\' theorem]] — the definition of conditional probability used twice — and used it on chests and medical tests. Statistics leans on it constantly, so this lesson is about using it **well**: naming its pieces, computing it fast, and avoiding the mistakes that even professionals make.',
        },
        {
          type: 'theorem',
          name: 'Bayes\' theorem (for a hypothesis H and evidence E)',
          tex: '\\underbrace{P(H \\mid E)}_{\\text{posterior}} = \\frac{\\overbrace{P(E \\mid H)}^{\\text{likelihood}}\\;\\overbrace{P(H)}^{\\text{prior}}}{\\underbrace{P(E \\mid H)P(H) + P(E \\mid \\overline{H})P(\\overline{H})}_{P(E) \\text{ by total probability}}}',
          text: 'The [[stat-prior-probability|prior]] is what you believed before seeing $E$; the **likelihood** says how well $H$ predicts $E$; the [[stat-posterior-probability|posterior]] is your updated belief.',
        },
        {
          type: 'p',
          text: 'A live example. Your anti-cheat system flags a player. Suppose $0.5\\%$ of players cheat, the detector flags $95\\%$ of cheaters, and it wrongly flags $2\\%$ of honest players. Should the flagged player be banned automatically? Most people — including many engineers — estimate $P(\\text{cheater} \\mid \\text{flagged})$ at $90\\%$ or more. Count it out:',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 540 285" xmlns="http://www.w3.org/2000/svg"><rect x="195.0" y="15" width="150" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="270" y="35" text-anchor="middle" font-size="13.5">100,000 players</text><rect x="70.0" y="100" width="120" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="130" y="120" text-anchor="middle" font-size="13.5" class="t-red">500 cheaters</text><rect x="340.0" y="100" width="140" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="410" y="120" text-anchor="middle" font-size="13.5" class="t-green">99,500 honest</text><line x1="235" y1="45" x2="150" y2="100" stroke="currentColor" stroke-width="1.5"/><text x="178" y="66" text-anchor="middle" font-size="12" class="t-gray">0.5%</text><line x1="305" y1="45" x2="390" y2="100" stroke="currentColor" stroke-width="1.5"/><text x="368" y="66" text-anchor="middle" font-size="12" class="t-gray">99.5%</text><rect x="10.0" y="185" width="110" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="65" y="205" text-anchor="middle" font-size="13.5" class="t-red">475 flagged</text><rect x="135.0" y="185" width="100" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="185" y="205" text-anchor="middle" font-size="13.5">25 missed</text><rect x="287.5" y="185" width="125" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="350" y="205" text-anchor="middle" font-size="13.5" class="t-orange">1,990 flagged</text><rect x="420.0" y="185" width="100" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="470" y="205" text-anchor="middle" font-size="13.5">97,510 clear</text><line x1="115" y1="130" x2="75" y2="185" stroke="currentColor" stroke-width="1.5"/><text x="80" y="158" text-anchor="middle" font-size="12" class="t-gray">95%</text><line x1="145" y1="130" x2="180" y2="185" stroke="currentColor" stroke-width="1.5"/><text x="178" y="158" text-anchor="middle" font-size="12" class="t-gray">5%</text><line x1="390" y1="130" x2="360" y2="185" stroke="currentColor" stroke-width="1.5"/><text x="361" y="158" text-anchor="middle" font-size="12" class="t-gray">2%</text><line x1="430" y1="130" x2="465" y2="185" stroke="currentColor" stroke-width="1.5"/><text x="466" y="158" text-anchor="middle" font-size="12" class="t-gray">98%</text><text x="270" y="250" text-anchor="middle" font-size="13.5">flagged: 475 + 1,990 = 2,465, of whom 475 cheat</text><text x="270" y="274" text-anchor="middle" font-size="14" class="t-red" font-weight="600">P(cheater | flagged) = 475 / 2,465 ≈ 19%</text></svg>', // fig:cheattree
          alt: 'Natural-frequency tree. 100,000 players split into 500 cheaters (0.5%) and 99,500 honest players (99.5%). Of the 500 cheaters, 95% (475) are flagged and 25 are missed. Of the 99,500 honest players, 2% (1,990) are flagged and 97,510 are clear. Flagged: 475 + 1,990 = 2,465, of whom 475 cheat. P(cheater given flagged) = 475/2,465, about 19%.',
          caption: 'Natural frequencies: picture $100{,}000$ players and push them down the tree. The flagged group is dominated by honest players, because there are so many more of them.',
          maxWidth: 520,
        },
        {
          type: 'derivation',
          title: 'The same answer with the formula',
          steps: [
            { tex: 'P(C) = 0.005, \\quad P(F \\mid C) = 0.95, \\quad P(F \\mid \\overline{C}) = 0.02', why: 'Prior (the base rate of cheating), the detector\'s hit rate, and its false-alarm rate.' },
            { tex: 'P(F) = 0.95(0.005) + 0.02(0.995) = 0.00475 + 0.01990 = 0.02465', why: 'Law of total probability: true flags plus false flags. ($2.465\\%$ of all players get flagged.)' },
            { tex: 'P(C \\mid F) = \\frac{0.00475}{0.02465} \\approx 0.193', why: 'Bayes: the share of flags that are true flags — the same $475/2465$ as the tree.' },
          ],
          result: 'Only about $19\\%$ of flagged players cheat. Auto-banning on this flag would ban about four honest players for every cheater.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The base-rate fallacy',
          text: 'Judging $P(\\text{cheater} \\mid \\text{flag})$ by how good the detector sounds, while ignoring how rare cheaters are, is the [[stat-base-rate-fallacy|base-rate fallacy]]. When the hypothesis is rare, even a small false-positive rate applied to the huge "no" group produces more false alarms than there are true cases. The posterior ($19\\%$) is a big jump from the prior ($0.5\\%$) — the flag *is* strong evidence — but it is not proof.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'In an MMO, $2\\%$ of accounts are gold-farming bots. A behavior detector flags $90\\%$ of bots and $1\\%$ of human players. An account is flagged. What is the probability it is a bot? Give $4$ decimal places.',
      hint: 'Picture $10{,}000$ accounts: how many bots are flagged, and how many humans?',
      label: '$P(\\text{bot} \\mid \\text{flag}) =$',
      answer: '0.02*0.9/(0.02*0.9 + 0.98*0.01)',
      answerTex: '\\tfrac{0.018}{0.0278} \\approx 0.6475',
      tolerance: 0.00005,
      explanation: 'Of $10{,}000$ accounts, $200$ are bots and $180$ of them are flagged; of $9{,}800$ humans, $98$ are flagged. So $P = \\frac{180}{180 + 98} = \\frac{180}{278} \\approx 0.6475$. With the formula: $\\frac{0.9 \\cdot 0.02}{0.9 \\cdot 0.02 + 0.01 \\cdot 0.98} = \\frac{0.018}{0.0278}$. A higher base rate ($2\\%$ rather than $0.5\\%$) and a lower false-alarm rate make this flag far more conclusive than the cheat flag — but a third of flagged accounts are still human.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Sensitivity, specificity and predictive values',
      blocks: [
        {
          type: 'p',
          text: 'Diagnostic tests — medical screens, drug tests, fraud and cheat detectors, spam filters, ML classifiers — all share one $2 \\times 2$ structure, often called a **confusion matrix**:',
        },
        {
          type: 'table',
          headers: ['Result', 'Condition present', 'Condition absent'],
          rows: [
            ['**Test positive**', 'true positive (TP)', 'false positive (FP)'],
            ['**Test negative**', 'false negative (FN)', 'true negative (TN)'],
          ],
        },
        {
          type: 'definition',
          term: 'Four rates',
          text: '[[stat-sensitivity-specificity|Sensitivity]] $= P(+ \\mid \\text{present}) = \\frac{TP}{TP + FN}$ and **specificity** $= P(- \\mid \\text{absent}) = \\frac{TN}{TN + FP}$ describe the **test**: they condition on the truth. The [[stat-predictive-value|predictive values]] $\\text{PPV} = P(\\text{present} \\mid +) = \\frac{TP}{TP + FP}$ and $\\text{NPV} = P(\\text{absent} \\mid -) = \\frac{TN}{TN + FN}$ describe what a **result** means: they condition on the test outcome.',
        },
        {
          type: 'derivation',
          title: 'PPV and NPV in terms of prevalence $\\pi$',
          steps: [
            { tex: 'P(+) = \\text{sens}\\cdot\\pi + (1 - \\text{spec})(1 - \\pi)', why: 'Total probability over "present" (probability $\\pi$, the prevalence) and "absent" ($1 - \\pi$).' },
            { tex: '\\text{PPV} = \\frac{\\text{sens}\\cdot\\pi}{\\text{sens}\\cdot\\pi + (1 - \\text{spec})(1 - \\pi)}', why: 'Bayes: true positives over all positives.' },
            { tex: '\\text{NPV} = \\frac{\\text{spec}\\,(1 - \\pi)}{\\text{spec}\\,(1 - \\pi) + (1 - \\text{sens})\\,\\pi}', why: 'Same reasoning for negatives: true negatives over all negatives.' },
          ],
          result: 'Sensitivity and specificity are fixed properties of the test, but PPV and NPV move with $\\pi$. The same detector means different things in different populations.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 1.05],
          xStep: 5,
          yStep: 0.2,
          height: 280,
          functions: [
            { expr: 'a*x/(a*x + (100 - b)*(100 - x))', color: 'red', label: 'PPV $= P(\\text{present} \\mid +)$', domain: [0.05, 50] },
            { expr: 'b*(100 - x)/(b*(100 - x) + (100 - a)*x)', color: 'green', label: 'NPV $= P(\\text{absent} \\mid -)$', domain: [0, 50] },
          ],
          vlines: [{ x: 'p', color: 'gray', label: 'prevalence' }],
          sliders: [
            { name: 'a', min: 50, max: 100, step: 0.5, value: 95, label: 'sensitivity (%)' },
            { name: 'b', min: 80, max: 99.9, step: 0.1, value: 98, label: 'specificity (%)' },
            { name: 'p', min: 0.1, max: 50, step: 0.1, value: 0.5, label: 'prevalence $\\pi$ (%)' },
          ],
          readouts: [
            { label: 'PPV $=$', expr: 'a*p/(a*p + (100 - b)*(100 - p))', digits: 3 },
            { label: 'NPV $=$', expr: 'b*(100 - p)/(b*(100 - p) + (100 - a)*p)', digits: 4 },
            { label: 'positives per $1000$ tested $=$', expr: '(a*p + (100 - b)*(100 - p))/10', digits: 1 },
          ],
          caption: 'Predictive values as functions of prevalence (horizontal axis, in percent). At $\\pi = 0.5\\%$ the PPV is only $0.19$; slide $\\pi$ to $20\\%$ and the same detector\'s PPV jumps to about $0.92$. Now raise the specificity toward $99.9\\%$ at low prevalence: at rare conditions, specificity — not sensitivity — controls the PPV.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 540 285" xmlns="http://www.w3.org/2000/svg"><rect x="175.0" y="15" width="190" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="270" y="35" text-anchor="middle" font-size="13.5">1,000 reported players</text><rect x="70.0" y="100" width="120" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="130" y="120" text-anchor="middle" font-size="13.5" class="t-red">200 cheaters</text><rect x="340.0" y="100" width="140" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="410" y="120" text-anchor="middle" font-size="13.5" class="t-green">800 honest</text><line x1="235" y1="45" x2="150" y2="100" stroke="currentColor" stroke-width="1.5"/><text x="178" y="66" text-anchor="middle" font-size="12" class="t-gray">20%</text><line x1="305" y1="45" x2="390" y2="100" stroke="currentColor" stroke-width="1.5"/><text x="368" y="66" text-anchor="middle" font-size="12" class="t-gray">80%</text><rect x="10.0" y="185" width="110" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="65" y="205" text-anchor="middle" font-size="13.5" class="t-red">190 flagged</text><rect x="135.0" y="185" width="100" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="185" y="205" text-anchor="middle" font-size="13.5">10 missed</text><rect x="287.5" y="185" width="125" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="350" y="205" text-anchor="middle" font-size="13.5" class="t-orange">16 flagged</text><rect x="420.0" y="185" width="100" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="470" y="205" text-anchor="middle" font-size="13.5">784 clear</text><line x1="115" y1="130" x2="75" y2="185" stroke="currentColor" stroke-width="1.5"/><text x="80" y="158" text-anchor="middle" font-size="12" class="t-gray">95%</text><line x1="145" y1="130" x2="180" y2="185" stroke="currentColor" stroke-width="1.5"/><text x="178" y="158" text-anchor="middle" font-size="12" class="t-gray">5%</text><line x1="390" y1="130" x2="360" y2="185" stroke="currentColor" stroke-width="1.5"/><text x="361" y="158" text-anchor="middle" font-size="12" class="t-gray">2%</text><line x1="430" y1="130" x2="465" y2="185" stroke="currentColor" stroke-width="1.5"/><text x="466" y="158" text-anchor="middle" font-size="12" class="t-gray">98%</text><text x="270" y="250" text-anchor="middle" font-size="13.5">flagged: 190 + 16 = 206, of whom 190 cheat</text><text x="270" y="274" text-anchor="middle" font-size="14" class="t-red" font-weight="600">P(cheater | flagged) = 190 / 206 ≈ 92%</text></svg>', // fig:cheattree2
          alt: 'Natural-frequency tree for 1,000 reported players: 200 cheaters (20%) and 800 honest (80%). Of the cheaters, 95% (190) are flagged and 10 missed; of the honest players, 2% (16) are flagged and 784 are clear. Flagged: 190 + 16 = 206, of whom 190 cheat. P(cheater given flagged) = 190/206, about 92%.',
          caption: 'The same detector run only on players **reported** by other players, where about $20\\%$ really cheat. Raising the prior from $0.5\\%$ to $20\\%$ lifts the PPV from $19\\%$ to $92\\%$. This is why screening tests are followed by confirmation tests, and why anti-cheat teams combine reports with detection.',
          maxWidth: 520,
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Precision and recall',
          text: 'Machine learning uses different names for the same quantities: **recall** is sensitivity, **precision** is PPV. A classifier\'s precision depends on the class balance of the data it is evaluated on — a model with $99\\%$ precision on a balanced test set can have $20\\%$ precision in production if positives are rare there. Always evaluate at the real base rate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'An anti-cheat detector has sensitivity $95\\%$ and specificity $98\\%$, and about $0.5\\%$ of players cheat. A streamer says: "It\'s $98\\%$ accurate, so anyone it flags is $98\\%$ likely to be a cheater." What is the main error?',
      options: [
        { text: 'Nothing: specificity is exactly the probability that a flagged player cheats', why: 'Specificity is $P(\\text{not flagged} \\mid \\text{honest})$. The claim is about $P(\\text{cheater} \\mid \\text{flagged})$ — a different conditional probability.' },
        { text: 'The number should be $95\\%$, because sensitivity is the relevant rate', why: 'Sensitivity $P(\\text{flag} \\mid \\text{cheater})$ also conditions in the wrong direction. Neither rate alone answers the question.' },
        { text: 'It confuses $P(\\text{flag} \\mid \\text{cheater status})$ with $P(\\text{cheater} \\mid \\text{flag})$ and ignores the base rate; the true value is about $19\\%$', correct: true, why: 'Reversing a conditional requires Bayes, and Bayes needs the prior. With $0.5\\%$ prevalence, honest false alarms outnumber true flags about $4$ to $1$.' },
        { text: 'The probability should be $2\\%$, the false-positive rate', why: '$2\\%$ is $P(\\text{flag} \\mid \\text{honest})$, the chance an honest player gets flagged — not the chance a flagged player is honest (that is about $81\\%$).' },
      ],
      explanation: 'This is the **prosecutor\'s fallacy**: treating $P(\\text{evidence} \\mid \\text{innocent})$ as if it were $P(\\text{innocent} \\mid \\text{evidence})$. The test\'s rates condition on the truth; the question conditions on the result. Bayes with the base rate gives $P(\\text{cheater} \\mid \\text{flag}) = \\frac{0.95 \\cdot 0.005}{0.95 \\cdot 0.005 + 0.02 \\cdot 0.995} \\approx 0.19$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Odds and likelihood ratios',
      blocks: [
        {
          type: 'p',
          text: 'Bayes\' theorem becomes much simpler in the language of [[stat-odds|odds]]: $\\text{odds}(H) = \\frac{P(H)}{P(\\overline{H})}$. A probability of $0.2$ is odds of $0.25$ ("$1$ to $4$"); converting back, $P = \\frac{\\text{odds}}{1 + \\text{odds}}$.',
        },
        {
          type: 'derivation',
          title: 'The odds form of Bayes\' theorem',
          steps: [
            { tex: 'P(H \\mid E) = \\frac{P(E \\mid H)P(H)}{P(E)}, \\qquad P(\\overline{H} \\mid E) = \\frac{P(E \\mid \\overline{H})P(\\overline{H})}{P(E)}', why: 'Bayes\' theorem for $H$ and for its complement, with the same evidence $E$.' },
            { tex: '\\frac{P(H \\mid E)}{P(\\overline{H} \\mid E)} = \\frac{P(H)}{P(\\overline{H})} \\cdot \\frac{P(E \\mid H)}{P(E \\mid \\overline{H})}', why: 'Divide the two equations: the awkward denominator $P(E)$ cancels.' },
            { tex: '\\text{posterior odds} = \\text{prior odds} \\times \\text{likelihood ratio}', why: 'The [[stat-likelihood-ratio|likelihood ratio]] $\\text{LR} = P(E \\mid H)/P(E \\mid \\overline{H})$ measures the strength of the evidence, separately from the prior.' },
          ],
          result: 'For a positive test, $\\text{LR}^+ = \\frac{\\text{sens}}{1 - \\text{spec}}$; for a negative one, $\\text{LR}^- = \\frac{1 - \\text{sens}}{\\text{spec}}$. $\\text{LR} > 1$ is evidence for $H$, $\\text{LR} < 1$ evidence against.',
        },
        {
          type: 'derivation',
          title: 'The cheat flag in odds',
          steps: [
            { tex: '\\text{prior odds} = \\frac{0.005}{0.995} = \\frac{1}{199}', why: 'One cheater for every $199$ honest players.' },
            { tex: '\\text{LR}^+ = \\frac{0.95}{0.02} = 47.5', why: 'A flag is $47.5$ times as likely for a cheater as for an honest player.' },
            { tex: '\\text{posterior odds} = \\frac{47.5}{199} \\approx 0.239 \\implies P = \\frac{0.239}{1.239} \\approx 0.193', why: 'Multiply, then convert odds back to probability. Same $19\\%$, two lines of arithmetic.' },
          ],
          result: 'A clean flag with $\\text{LR}^- = 0.05/0.98 \\approx 0.051$ cuts the odds about twenty-fold: from $1/199$ to about $1/3900$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why odds are the natural scale for evidence',
          text: 'The likelihood ratio depends only on the evidence and the two hypotheses, not on the prior. So you can say how strong a piece of evidence is ("this flag multiplies the odds by $47.5$") without knowing who it will be applied to, and two analysts who disagree about the prior still agree on the update. Taking logarithms turns the multiplication into addition: $\\log(\\text{posterior odds}) = \\log(\\text{prior odds}) + \\log \\text{LR}$. Each piece of evidence adds a "weight of evidence" score.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Bans and decibans at Bletchley Park',
          text: 'Alan Turing and I. J. Good, breaking the Enigma cipher in World War II, measured evidence in **bans**: one ban is a likelihood ratio of $10$ (a factor of $10$ in the odds), and a deciban is a tenth of that. Clues about a candidate setting were scored in decibans and added up, exactly the log-odds bookkeeping above. Logistic regression (Unit 10) is the same idea fitted to data.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Before any evidence, you think $1$ in $50$ new accounts is a smurf (an experienced player on a new account). A win-streak pattern has likelihood ratio $12$ for "smurf" versus "genuine new player". Using the odds form, what is the posterior probability that an account showing the pattern is a smurf? Exact fraction or $4$ decimal places.',
      hint: '$1$ in $50$ is odds $1 : 49$. Multiply by the LR, then convert odds $o$ to probability $o/(1 + o)$.',
      label: '$P(\\text{smurf} \\mid \\text{pattern}) =$',
      answer: '12/61',
      answerTex: '\\tfrac{12}{61} \\approx 0.1967',
      minDecimals: 4,
      explanation: 'Prior probability $1/50$ means prior odds $\\frac{1/50}{49/50} = \\frac{1}{49}$. Posterior odds $= \\frac{1}{49} \\times 12 = \\frac{12}{49}$. Probability $= \\frac{12/49}{1 + 12/49} = \\frac{12}{61} \\approx 0.1967$. A common slip is to multiply the **probability** by the LR ($12/50 = 0.24$); that works only approximately, when the prior is very small.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Sequential updating and Bayesian search',
      blocks: [
        {
          type: 'p',
          text: 'Evidence usually arrives in pieces. Bayes handles that naturally: **today\'s posterior is tomorrow\'s prior**. If the pieces $E_1, E_2, \\dots$ are conditionally independent given each hypothesis, their likelihood ratios simply multiply:',
        },
        {
          type: 'math',
          tex: '\\text{odds}(H \\mid E_1, \\dots, E_k) = \\text{odds}(H) \\cdot \\text{LR}_1 \\cdot \\text{LR}_2 \\cdots \\text{LR}_k',
          caption: '**Conditionally independent** means: among cheaters, $E_2$ is no more or less likely given $E_1$, and likewise among honest players. Two different detectors looking at different signals can be close to this; the same detector re-run on the same data is not.',
        },
        {
          type: 'graph',
          x: [0, 6],
          y: [0, 1.05],
          xStep: 1,
          yStep: 0.2,
          height: 260,
          functions: [{ expr: '1/(1 + (100 - r)/(r*m^x))', color: 'purple', label: 'posterior after $k$ independent flags', domain: [0, 6] }],
          points: [0, 1, 2, 3, 4, 5, 6].map((k) => ({ x: k, y: `1/(1 + (100 - r)/(r*m^${k}))`, color: 'purple' as const })),
          hlines: [{ y: 0.95, label: '95%', color: 'gray' }],
          sliders: [
            { name: 'r', min: 0.1, max: 20, step: 0.1, value: 0.5, label: 'prior $P(\\text{cheater})$ (%)' },
            { name: 'm', min: 1, max: 50, step: 0.5, value: 10, label: 'likelihood ratio per flag' },
          ],
          readouts: [
            { label: 'after $1$ flag:', expr: '1/(1 + (100 - r)/(r*m))', digits: 3 },
            { label: 'after $2$ flags:', expr: '1/(1 + (100 - r)/(r*m^2))', digits: 3 },
            { label: 'after $3$ flags:', expr: '1/(1 + (100 - r)/(r*m^3))', digits: 3 },
          ],
          caption: 'Each independent flag multiplies the odds by the likelihood ratio, so the posterior follows a logistic S-curve in the number of flags (the dots). With prior $0.5\\%$ and $\\text{LR} = 10$, one flag gives $0.048$, two give $0.33$, three give $0.83$, four give $0.98$. Weak evidence, accumulated independently, becomes strong.',
        },
        {
          type: 'heading',
          text: 'Bayesian search: updating on failure',
        },
        {
          type: 'p',
          text: 'Negative evidence counts too. A search team splits the ocean floor into areas with prior probabilities of holding a wreck. Searching area $A$ detects the wreck with probability $d$ **if it is there**. When the search of $A$ finds nothing, Bayes says how to redistribute belief:',
        },
        {
          type: 'derivation',
          title: 'Posterior for the searched area after a failed search',
          steps: [
            { tex: 'P(\\text{not found}) = P(\\text{not found} \\mid A)P(A) + P(\\text{not found} \\mid \\overline{A})P(\\overline{A}) = (1 - d)p + (1 - p) = 1 - pd', why: 'Total probability: if the wreck is in $A$ (probability $p$) the search misses with probability $1 - d$; if it is elsewhere, the search of $A$ certainly finds nothing.' },
            { tex: 'P(A \\mid \\text{not found}) = \\frac{(1 - d)\\,p}{1 - pd}', why: 'Bayes\' theorem.' },
            { tex: 'P(B \\mid \\text{not found}) = \\frac{P(B)}{1 - pd} \\quad \\text{for every other area } B', why: 'For $B \\ne A$, $P(\\text{not found} \\mid B) = 1$. Every unsearched area grows by the same factor $1/(1 - pd)$.' },
          ],
          result: 'With $p = 0.5$ and $d = 0.8$: $A$ drops to $0.1/0.6 \\approx 0.167$, while areas with priors $0.3$ and $0.2$ grow to $0.5$ and $0.333$. Searching where the posterior (times the detection probability) is highest, then updating, is **Bayesian search theory**.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 530 185" xmlns="http://www.w3.org/2000/svg"><text x="120" y="20" text-anchor="middle" font-size="13" font-weight="600">Before: prior</text><rect x="15" y="34" width="66" height="90" rx="6" class="f-orange" fill-opacity="0.85"/><text x="48" y="70" text-anchor="middle" font-size="15" font-weight="600">A</text><text x="48" y="96" text-anchor="middle" font-size="13">0.500</text><rect x="85" y="34" width="66" height="90" rx="6" class="f-blue" fill-opacity="0.58"/><text x="118" y="70" text-anchor="middle" font-size="15" font-weight="600">B</text><text x="118" y="96" text-anchor="middle" font-size="13">0.300</text><rect x="155" y="34" width="66" height="90" rx="6" class="f-blue" fill-opacity="0.42"/><text x="188" y="70" text-anchor="middle" font-size="15" font-weight="600">C</text><text x="188" y="96" text-anchor="middle" font-size="13">0.200</text><text x="405" y="20" text-anchor="middle" font-size="13" font-weight="600">After searching A, nothing found</text><rect x="300" y="34" width="66" height="90" rx="6" class="f-orange" fill-opacity="0.37"/><text x="333" y="70" text-anchor="middle" font-size="15" font-weight="600">A</text><text x="333" y="96" text-anchor="middle" font-size="13">0.167</text><rect x="370" y="34" width="66" height="90" rx="6" class="f-blue" fill-opacity="0.85"/><text x="403" y="70" text-anchor="middle" font-size="15" font-weight="600">B</text><text x="403" y="96" text-anchor="middle" font-size="13">0.500</text><rect x="440" y="34" width="66" height="90" rx="6" class="f-blue" fill-opacity="0.63"/><text x="473" y="70" text-anchor="middle" font-size="15" font-weight="600">C</text><text x="473" y="96" text-anchor="middle" font-size="13">0.333</text><path d="M240 79 L285 79" stroke="currentColor" stroke-width="1.6"/><polygon points="292,79 282,74 282,84" fill="currentColor"/><text x="263" y="150" text-anchor="middle" font-size="12" class="t-gray">search of A detects the wreck with probability 0.8 if it is there</text><text x="263" y="172" text-anchor="middle" font-size="12" class="t-gray">P(A | not found) = 0.5 × 0.2 / (1 − 0.5 × 0.8) = 0.1 / 0.6 ≈ 0.167</text></svg>', // fig:search
          alt: 'Three search areas before and after a failed search of area A. Before: A 0.500 (orange, darkest), B 0.300, C 0.200. After searching A and finding nothing: A 0.167, B 0.500 (now darkest), C 0.333. Notes: the search of A detects the wreck with probability 0.8 if it is there; P(A given not found) = 0.5 times 0.2 divided by (1 minus 0.5 times 0.8) = 0.1/0.6, about 0.167.',
          caption: 'A failed search does not rule $A$ out — it just shifts belief. The next search should go to $B$.',
          maxWidth: 520,
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Found by Bayes',
          text: 'The U.S. Navy used Bayesian search to recover a hydrogen bomb lost off Palomares, Spain, in 1966 and to locate the wreck of the submarine USS *Scorpion* in 1968. In 2011, after two years of failed searches for Air France Flight 447 in the South Atlantic, a Bayesian reanalysis that properly weighted the earlier unsuccessful searches pointed to an area where the wreckage was found within about a week of searching.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A search team believes a downed drone lies in sector A with probability $0.4$. A sweep of sector A detects the drone with probability $0.8$ if it is there. The sweep finds nothing. What is the new probability that the drone is in sector A? Give $4$ decimal places.',
      hint: '$P(A \\mid \\text{not found}) = \\dfrac{(1 - d)p}{1 - pd}$.',
      label: '$P(A \\mid \\text{not found}) =$',
      answer: '0.4*0.2/(1 - 0.4*0.8)',
      answerTex: '\\tfrac{0.08}{0.68} \\approx 0.1176',
      minDecimals: 4,
      explanation: 'Numerator: the drone is in A **and** the sweep misses it: $0.4 \\times 0.2 = 0.08$. Denominator: the sweep finds nothing at all: $0.08 + 0.6 = 0.68$ (it certainly finds nothing if the drone is elsewhere). So $P = 0.08/0.68 = 2/17 \\approx 0.1176$. The failed sweep cut sector A\'s probability by about $70\\%$, and every other sector\'s probability grew by the factor $1/0.68 \\approx 1.47$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'A detector with likelihood ratio $47.5$ flags a player. Re-running the **same** detector on the **same** match data flags the player again, so the odds should now be multiplied by $47.5^2 \\approx 2256$.',
      answer: false,
      explanation: 'Multiplying likelihood ratios requires the pieces of evidence to be conditionally independent given the truth. Re-running a deterministic detector on the same data reproduces the same result with probability $1$ for cheaters and honest players alike, so the second flag has likelihood ratio $1$ and adds no information. Independent evidence means new data (another match) or a different signal — and even then, an honest player whose playstyle trips the detector once may well trip it again, so real systems discount repeated flags.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Naive Bayes: filtering chat spam',
      blocks: [
        {
          type: 'p',
          text: 'Gold sellers flood MMO chat with spam. A [[stat-naive-bayes|naive Bayes]] filter learns, from labeled training messages, how often each word appears in spam and in normal chat, and scores a new message by adding up log likelihood ratios — sequential updating, one word at a time.',
        },
        {
          type: 'table',
          headers: ['Word', 'in spam ($n = 1000$)', 'in normal chat ($n = 9000$)', 'likelihood ratio'],
          rows: [
            ['`www`', '$700$', '$30$', '$\\approx 203$'],
            ['`cheap`', '$410$', '$90$', '$\\approx 41$'],
            ['`gold`', '$620$', '$450$', '$\\approx 12.4$'],
            ['`raid`', '$40$', '$900$', '$\\approx 0.41$'],
            ['`gg`', '$15$', '$2400$', '$\\approx 0.060$'],
          ],
          caption: 'Training counts: how many messages of each class contain the word. The LR is $P(\\text{word} \\mid \\text{spam})/P(\\text{word} \\mid \\text{normal})$, computed with the $+1$ smoothing in the code below. Prior odds of spam: $1000 : 9000 = 1 : 9$.',
        },
        {
          type: 'code',
          title: 'chat_filter.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <map>
#include <sstream>
#include <string>

// Training data: how many of 1,000 spam and 9,000 normal chat messages contain each word.
const double nSpam = 1000, nNormal = 9000;
const std::map<std::string, std::pair<double, double>> wordCounts = {
    // word      {spam, normal}
    {"gold",  {620, 450}},
    {"cheap", {410, 90}},
    {"www",   {700, 30}},
    {"gg",    {15, 2400}},
    {"raid",  {40, 900}},
};

// Posterior P(spam | words) using log-odds: prior log-odds + sum of log likelihood ratios.
double spamProbability(const std::string& message) {
    double logOdds = std::log(nSpam / nNormal);              // prior odds 1:9
    std::istringstream in(message);
    std::string w;
    while (in >> w) {
        auto it = wordCounts.find(w);
        if (it == wordCounts.end()) continue;                // unknown word: no evidence
        double pSpam = (it->second.first + 1) / (nSpam + 2);    // Laplace smoothing
        double pNormal = (it->second.second + 1) / (nNormal + 2);
        logOdds += std::log(pSpam / pNormal);                // add log likelihood ratio
    }
    return 1 / (1 + std::exp(-logOdds));                     // odds -> probability
}

int main() {
    for (const char* m : {"cheap gold www", "gg raid tonight", "gold for raid", "selling gold"})
        std::printf("%-16s P(spam) = %.4f\\n", m, spamProbability(m));
}`,
          output: `cheap gold www   P(spam) = 0.9999
gg raid tonight  P(spam) = 0.0027
gold for raid    P(spam) = 0.3598
selling gold     P(spam) = 0.5789`,
          annotations: [
            { lines: 20, text: 'Start from the prior log-odds, $\\ln(1/9) \\approx -2.20$.' },
            { lines: '26-28', text: '**Laplace smoothing**: add $1$ to every count (and $2$ to the totals) so a word never seen in one class does not get probability $0$ — which would make its log-likelihood ratio infinite and let one word veto all other evidence.' },
            { lines: 30, text: 'Convert log-odds $\\ell$ back to a probability: $P = \\frac{e^\\ell}{1 + e^\\ell} = \\frac{1}{1 + e^{-\\ell}}$, the logistic function.' },
          ],
        },
        {
          type: 'p',
          text: 'Check one by hand: "selling gold" has one known word, so the posterior odds are $\\frac{1}{9} \\times 12.37 \\approx 1.374$ and $P = 1.374/2.374 \\approx 0.579$. "gold for raid" multiplies in $0.409$ for `raid`, dropping the odds to $0.562$ and $P$ to $0.36$: a raid-group message that mentions gold is probably not spam.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Why "naive"?',
          text: 'Adding log-LRs assumes the words are conditionally independent given the class. They are not: `www` and `cheap` tend to appear together in spam, so their evidence overlaps and naive Bayes double-counts it. Its probabilities come out **overconfident** ($0.9999$ for the first message is too extreme), but its **ranking** of messages is often excellent, which is why it was the workhorse of early spam filters and is still a strong baseline.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A chat message contains `cheap` and `www`. The prior probability of spam is $0.1$, $\\text{LR}(\\texttt{cheap}) \\approx 40.6$ and $\\text{LR}(\\texttt{www}) \\approx 203$. Tap the first wrong line of this naive Bayes calculation.',
      lines: [
        'Prior odds of spam: $\\dfrac{0.1}{0.9} = \\dfrac{1}{9}$.',
        'Treat the two words as conditionally independent given the class.',
        'Posterior odds $= \\dfrac{1}{9}\\left(40.6 + 203\\right) \\approx 27.1$.',
        '$P(\\text{spam}) = \\dfrac{27.1}{1 + 27.1} \\approx 0.964$.',
      ],
      errorLines: [3],
      explanation: 'Likelihood ratios **multiply** (their logarithms add): posterior odds $= \\frac{1}{9} \\times 40.6 \\times 203 \\approx 916$, so $P(\\text{spam}) = \\frac{916}{917} \\approx 0.999$. Adding the LRs has no justification — with the words\' evidence combined correctly, the message is far more certainly spam than $96\\%$. Lines 1, 2 and the odds-to-probability conversion in line 4 are fine.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Cheat detection in practice: thresholds, costs and ROC curves',
      blocks: [
        {
          type: 'p',
          text: 'Real detectors output a **score** (how bot-like the mouse movement is, how inhumanly fast the reactions), and you choose a threshold $c$: flag if score $> c$. A simple model: honest players\' scores follow a bell curve centered at $0$, cheaters\' the same curve shifted right by $d$ (the **separation**). The threshold decides the trade-off.',
        },
        {
          type: 'graph',
          x: [-4, 8],
          y: [0, 0.45],
          xStep: 1,
          yStep: 0.1,
          height: 260,
          functions: [
            { expr: 'normpdf(x)', color: 'green', label: 'honest players\' scores' },
            { expr: 'normpdf(x - d)', color: 'red', label: 'cheaters\' scores' },
          ],
          areas: [
            { expr: 'normpdf(x - d)', from: 'c', to: 8, color: 'red' },
            { expr: 'normpdf(x)', from: 'c', to: 8, color: 'green' },
          ],
          vlines: [{ x: 'c', label: 'threshold', color: 'gray' }],
          sliders: [
            { name: 'd', min: 0, max: 5, step: 0.1, value: 3, label: 'separation $d$' },
            { name: 'c', min: -2, max: 6, step: 0.05, value: 2, label: 'threshold $c$' },
          ],
          readouts: [
            { label: 'sensitivity $=$', expr: '1 - normcdf(c - d)', digits: 3 },
            { label: 'specificity $=$', expr: 'normcdf(c)', digits: 4 },
            { label: 'PPV at $0.5\\%$ prevalence $=$', expr: '0.005(1 - normcdf(c - d))/(0.005(1 - normcdf(c - d)) + 0.995(1 - normcdf(c)))', digits: 3 },
          ],
          caption: 'Red shading: cheaters above the threshold (caught; its area is the sensitivity). Green shading: honest players above it (false alarms; area $1 -$ specificity). Raising $c$ trades sensitivity for specificity — and at a $0.5\\%$ base rate the PPV climbs steeply as false alarms vanish. Only a better detector (larger $d$) improves both at once.',
        },
        {
          type: 'p',
          text: 'Sweeping the threshold from high to low traces the **ROC curve** (receiver operating characteristic, a name from WWII radar): false-positive rate on the horizontal axis, sensitivity on the vertical. A useless detector ($d = 0$) lies on the diagonal; a perfect one hugs the top-left corner. The area under the curve (AUC) summarizes the detector independent of any threshold.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 1],
          xStep: 0.2,
          yStep: 0.2,
          equal: true,
          parametric: [{ x: '1 - normcdf(t)', y: '1 - normcdf(t - d)', t: [-6, 10], color: 'purple', label: 'ROC curve' }],
          functions: [{ expr: 'x', color: 'gray', dashed: true, label: 'chance (no information)' }],
          points: [{ x: '1 - normcdf(c)', y: '1 - normcdf(c - d)', color: 'red', label: 'threshold c' }],
          sliders: [
            { name: 'd', min: 0, max: 4, step: 0.1, value: 2, label: 'separation $d$' },
            { name: 'c', min: -2, max: 5, step: 0.05, value: 1.5, label: 'threshold $c$' },
          ],
          readouts: [
            { label: 'false-positive rate $=$', expr: '1 - normcdf(c)', digits: 3 },
            { label: 'sensitivity $=$', expr: '1 - normcdf(c - d)', digits: 3 },
            { label: 'AUC $= \\Phi(d/\\sqrt{2}) =$', expr: 'normcdf(d/sqrt(2))', digits: 3 },
          ],
          caption: 'Each threshold is one point on the curve. Increase $d$ and the whole curve bows toward the corner. ($\\Phi$ is the standard normal CDF from Unit 4; for this model the AUC is $\\Phi(d/\\sqrt{2})$, the probability that a random cheater scores higher than a random honest player.)',
        },
        {
          type: 'derivation',
          title: 'Choosing the threshold from the costs of mistakes',
          steps: [
            { tex: 'q = P(\\text{cheater} \\mid \\text{evidence})', why: 'The posterior for one player, from the base rate and the evidence.' },
            { tex: 'E[\\text{cost of banning}] = (1 - q)\\,C_{\\text{FP}}, \\qquad E[\\text{cost of not banning}] = q\\,C_{\\text{FN}}', why: 'Banning costs $C_{\\text{FP}}$ only if the player is honest; not banning costs $C_{\\text{FN}}$ only if they cheat.' },
            { tex: '\\text{ban} \\iff q\\,C_{\\text{FN}} > (1 - q)\\,C_{\\text{FP}} \\iff q > \\frac{C_{\\text{FP}}}{C_{\\text{FP}} + C_{\\text{FN}}}', why: 'Choose the action with the smaller expected cost, then solve for $q$.' },
          ],
          result: 'If wrongly banning an honest player is $20$ times as costly as missing a cheater, ban only when $q > 20/21 \\approx 0.95$. A single $19\\%$ flag falls far short; it justifies a closer look (more matches, a human review), which is how real anti-cheat pipelines work — and why many studios ban in delayed "waves" after evidence accumulates.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'An anti-cheat team **raises** the score threshold above which players are flagged, without changing the detector. What happens?',
      options: [
        { text: 'Sensitivity and specificity both increase', why: 'With a fixed detector, one threshold trades one for the other. Improving both requires a better detector (more separation), not a new threshold.' },
        { text: 'Sensitivity decreases, specificity increases, and at a low base rate the PPV usually rises', correct: true, why: 'Fewer cheaters clear the higher bar (lower sensitivity), but far fewer honest players do too (higher specificity). Since false positives dominated the flags, the flagged group becomes much purer.' },
        { text: 'Sensitivity increases and specificity decreases', why: 'That is what **lowering** the threshold does: flag more of everyone.' },
        { text: 'Nothing changes, because sensitivity and specificity are fixed properties of the detector', why: 'They are fixed for a given threshold. Moving the threshold moves you along the ROC curve.' },
      ],
      explanation: 'A threshold is a point on the ROC curve. Moving it up flags fewer players of both kinds: sensitivity falls, specificity rises. Because honest players vastly outnumber cheaters, cutting the false-positive rate usually matters more for the PPV than the lost sensitivity does. Which point is "best" depends on the costs of the two kinds of errors.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the steps of a natural-frequency calculation of $P(\\text{condition} \\mid \\text{positive})$ in order.',
      lines: [
        'Imagine a round number of people, such as $100{,}000$.',
        'Split them by the base rate into "condition present" and "condition absent".',
        'Apply the sensitivity to the first group and the false-positive rate to the second to count positives in each.',
        'Add the two counts to get all positives.',
        'Divide the true positives by all positives.',
      ],
      distractors: ['Divide the sensitivity by the false-positive rate.'],
      explanation: 'This is Bayes\' theorem written in counts: the base rate splits the population (prior), the test rates split each branch (likelihoods), the sum of positives is $P(+)$ (total probability), and the final ratio is the posterior. The distractor computes the likelihood ratio $\\text{LR}^+$, which tells you how much the odds change — useful, but not the probability itself until you combine it with the prior odds.',
    },
  ],
  takeaways: [
    'Posterior $\\propto$ likelihood $\\times$ prior. When the hypothesis is rare, false positives from the large "no" group can swamp the true positives: the base-rate fallacy.',
    'Natural-frequency trees ("imagine $100{,}000$ people") make Bayes calculations transparent and hard to get wrong.',
    'Sensitivity and specificity condition on the truth and describe the test; PPV and NPV condition on the result and depend strongly on prevalence. At low prevalence, specificity drives the PPV.',
    'Odds form: posterior odds $=$ prior odds $\\times$ LR, with $\\text{LR}^+ = \\frac{\\text{sens}}{1 - \\text{spec}}$. In log-odds, evidence adds.',
    'Conditionally independent evidence multiplies LRs; repeated or correlated evidence does not. Failed searches lower the searched area\'s probability to $\\frac{(1-d)p}{1 - pd}$ and raise all others.',
    'Naive Bayes adds per-feature log-LRs (with smoothing); its probabilities are overconfident but its rankings are useful.',
    'A threshold picks a point on the ROC curve; choose it from the costs: act when $q > \\frac{C_{\\text{FP}}}{C_{\\text{FP}} + C_{\\text{FN}}}$.',
  ],
  reading: [
    {
      title: 'Wikipedia — Base rate fallacy',
      url: 'https://en.wikipedia.org/wiki/Base_rate_fallacy',
      source: 'wikipedia',
      note: 'Classic examples (medical screening, terrorist identification, drunk-driving tests) and the psychology research on why people neglect base rates.',
    },
    {
      title: 'Wikipedia — Bayesian search theory',
      url: 'https://en.wikipedia.org/wiki/Bayesian_search_theory',
      source: 'wikipedia',
      note: 'The search-update formulas from this lesson and their use in the Scorpion, Palomares and Air France 447 searches.',
    },
    {
      title: 'Wikipedia — Naive Bayes spam filtering',
      url: 'https://en.wikipedia.org/wiki/Naive_Bayes_spam_filtering',
      source: 'wikipedia',
      note: 'How real filters combine word probabilities, handle rare words and deal with the independence assumption.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'Reading 3 covers Bayes\' theorem with trees and the base-rate fallacy; the later Bayesian-updating readings preview Unit 11.',
    },
  ],
};
