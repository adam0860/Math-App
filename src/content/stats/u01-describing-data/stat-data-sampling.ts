import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'stat-data-sampling',
  title: 'Data, Variables and Sampling',
  summary: 'Welcome to statistics: deciding under uncertainty from data. Populations and samples, parameters and statistics, kinds of variables, observational studies versus randomized experiments, how to sample (simple random, stratified, cluster, systematic) and how samples go wrong (selection, nonresponse and survivorship bias) — and why more data never fixes a biased design.',
  minutes: 20,
  objectives: [
    'Explain what statistics is for and how it reverses the direction of probability (data → model instead of model → data)',
    'Distinguish populations from samples and parameters from statistics, with the standard notation ($\\mu$ vs $\\bar{x}$, $p$ vs $\\hat{p}$)',
    'Classify variables as categorical (nominal, ordinal) or quantitative (discrete, continuous)',
    'Tell an observational study from a randomized experiment and explain why only randomization supports causal conclusions',
    'Describe simple random, stratified, cluster, systematic and convenience sampling, and combine stratum results with the right weights',
    'Recognize selection, nonresponse and survivorship bias, and explain why a larger sample shrinks random error but not bias',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Welcome: what statistics is for',
      blocks: [
        {
          type: 'p',
          text: 'Your team ships a balance patch. In the first $2{,}000$ matches, the new sniper rifle wins $53\\%$ of its duels. Is the rifle overpowered, or is $53\\%$ just what $50\\%$ looks like after a lucky week? A new tutorial raises day-7 retention from $41\\%$ to $43\\%$ in a test: ship it or not? A radio fails twice in $500$ hours of field use: does it meet its reliability requirement?',
        },
        {
          type: 'p',
          text: 'Every one of these is a **decision under uncertainty, made from data**. That is what statistics is: the science of learning from data that are noisy, incomplete and gathered from only part of what you care about — and of saying honestly how sure you can be. It runs game telemetry and playtests, A/B tests, machine learning (training a model *is* estimating parameters from data), clinical trials and physics, polling, and military logistics, from equipment reliability to search planning.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="55" width="150" height="100" rx="10" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="95" y="88" text-anchor="middle" font-size="16" class="t-purple" font-weight="600">Model</text><text x="95" y="110" text-anchor="middle" font-size="12">population,</text><text x="95" y="126" text-anchor="middle" font-size="12">parameters μ, σ, p</text><text x="95" y="142" text-anchor="middle" font-size="12">(unknown in practice)</text><rect x="350" y="55" width="150" height="100" rx="10" fill="none" stroke="currentColor" stroke-width="1.6" class="s-teal"/><text x="425" y="88" text-anchor="middle" font-size="16" class="t-teal" font-weight="600">Data</text><text x="425" y="110" text-anchor="middle" font-size="12">a sample:</text><text x="425" y="126" text-anchor="middle" font-size="12">x₁, x₂, …, xₙ</text><text x="425" y="142" text-anchor="middle" font-size="12">(what you observe)</text><path d="M175 75 Q260 30 345 75" fill="none" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="345,75 333,73 340,64" class="f-blue"/><text x="260" y="28" text-anchor="middle" font-size="14" class="t-blue" font-weight="600">Probability</text><text x="260" y="45" text-anchor="middle" font-size="12">model known → what data to expect?</text><path d="M345 135 Q260 180 175 135" fill="none" stroke="currentColor" stroke-width="2" class="s-orange"/><polygon points="175,135 187,137 180,146" class="f-orange"/><text x="260" y="182" text-anchor="middle" font-size="14" class="t-orange" font-weight="600">Statistics</text><text x="260" y="199" text-anchor="middle" font-size="12">data observed → what model produced it?</text></svg>', // fig:probstat
          alt: 'Two boxes: Model (population, parameters mu, sigma, p, unknown in practice) on the left and Data (a sample x1 to xn, what you observe) on the right. A blue arrow from Model to Data is labeled Probability: model known, what data to expect? An orange arrow from Data back to Model is labeled Statistics: data observed, what model produced it?',
          caption: 'Probability and statistics run the same road in opposite directions. Probability is deduction; statistics is inference, and it leans on probability at every step.',
          maxWidth: 500,
        },
        {
          type: 'p',
          text: 'In Discrete Math you did **probability**: given a fair coin, how likely are $60$ or more heads in $100$ tosses? The model is known; you deduce what data to expect. **Statistics** runs the other way: you *saw* $60$ heads — is the coin fair, and if not, what is its bias? The model is unknown; you infer it from data. Because the data are random, every statistical answer comes with a measure of uncertainty, and that is why this course needs a solid probability toolkit first.',
        },
        {
          type: 'table',
          headers: ['Unit', 'What you will learn'],
          rows: [
            ['1. Describing data', 'Where data come from; center, spread and honest graphs'],
            ['2. Probability toolkit', 'The rules again, Bayes in practice, simulation as a check'],
            ['3–4. Random variables', 'PMFs and densities (with integrals); binomial, Poisson, exponential, normal'],
            ['5–6. Joint behavior and limits', 'Covariance, sums; the law of large numbers and the central limit theorem'],
            ['7. Estimation', 'Standard error, maximum likelihood, confidence intervals'],
            ['8–9. Testing', 'p-values, t-tests, A/B tests and power; chi-square, permutation tests, the bootstrap'],
            ['10. Regression', 'Least squares as statistics: inference, diagnostics, logistic regression'],
            ['11. Statistics for computing', 'Bayesian inference, generating random variables, games and ML'],
          ],
          caption: 'The road map. Each unit builds the tools the next one needs.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why not just look at the numbers?',
          text: 'Because data vary even when nothing changes. Play the same build twice and you get different win rates, frame times and crash counts. Statistics separates **signal** (a real difference) from **noise** (sample-to-sample variation) — and, just as important, catches data that were collected in a way that guarantees a wrong answer. This lesson is about that second danger: the design of a study decides what its data can ever tell you.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these is a **statistics** question rather than a probability question?',
      options: [
        { text: 'A loot box drops a legendary with probability $0.02$. What is the chance of at least one legendary in $50$ boxes?', why: 'The model ($p = 0.02$) is given and you deduce what data to expect: that is probability, answered with $1 - 0.98^{50}$.' },
        { text: 'Players opened $5{,}000$ boxes and found $61$ legendaries. Is the advertised $2\\%$ rate believable?', correct: true, why: 'Here the data are given and the model is in question: you reason from $61/5000 = 1.22\\%$ back to the unknown drop rate. That is inference — statistics.' },
        { text: 'Two fair dice are rolled. What is the probability that the sum is $7$?', why: 'The dice are known to be fair, so this is pure probability: $6/36$.' },
        { text: 'A server crashes independently with probability $0.001$ per hour. What is the expected number of crashes in a week?', why: 'Again the model is assumed known; the answer $168 \\times 0.001 = 0.168$ follows by deduction (linearity of expectation).' },
      ],
      explanation: 'The direction tells them apart. Probability: known model → predictions about data. Statistics: observed data → conclusions about the unknown model. The loot-box question gives you counts and asks about the rate that produced them. (In Unit 8 you will be able to answer it: $61$ out of $5{,}000$ is very unlikely if the true rate is $2\\%$, since you would expect about $100$.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Populations and samples, parameters and statistics',
      blocks: [
        {
          type: 'p',
          text: 'Every statistical question is about some group of units — players, matches, frames, soldiers, radios. The whole group you want to know about is the **population**; the part you actually measure is the **sample**. You almost never see the whole population: it may be huge (every match ever played), still growing (future players), or destroyed by measurement (testing a battery to failure).',
        },
        {
          type: 'definition',
          term: 'Parameter and statistic',
          text: 'A [[stat-parameter|parameter]] is a number that describes the [[stat-population|population]]: fixed, but usually unknown. A [[stat-statistic|statistic]] is a number computed from the [[stat-sample|sample]]: known, but it would change if you drew a different sample. We use statistics to **estimate** parameters.',
        },
        {
          type: 'table',
          headers: ['Quantity', 'Population (parameter)', 'Sample (statistic)'],
          rows: [
            ['Size', '$N$', '$n$'],
            ['Mean', '$\\mu$', '$\\bar{x}$'],
            ['Standard deviation', '$\\sigma$', '$s$'],
            ['Proportion', '$p$', '$\\hat{p}$ ("p-hat")'],
          ],
          caption: 'Greek letters for parameters, Latin letters and hats for statistics. A hat always means "estimate of".',
        },
        {
          type: 'derivation',
          title: 'Naming the pieces of a real question',
          steps: [
            { tex: '\\text{Question: what fraction of this season\'s ranked matches does the sniper win?}', why: 'Always start by stating precisely what you want to know. "Win rate" alone is ambiguous: of duels? of matches? this season or all time?' },
            { tex: '\\text{Population: all ranked matches this season with the sniper (}N \\approx 3.1\\text{ million)}', why: 'The population is defined by the question, not by what is convenient to measure.' },
            { tex: '\\text{Parameter: } p = \\text{the win rate in all of those matches}', why: 'A single fixed number. Nobody knows it exactly while the season is running.' },
            { tex: '\\text{Sample: } n = 2000 \\text{ randomly chosen matches; statistic: } \\hat{p} = \\tfrac{1060}{2000} = 0.53', why: 'The statistic is computed from data. Another random $2{,}000$ matches would give a slightly different $\\hat{p}$.' },
          ],
          result: 'The statistical question is now precise: how far from $p$ is $\\hat{p} = 0.53$ likely to be? Unit 7 answers it: for $n = 2000$ the typical miss (the standard error) is about $1.1$ percentage points, so $53\\%$ sits nearly three standard errors above $50\\%$ — evidence of a real edge.',
        },
        {
          type: 'p',
          text: 'That variation from sample to sample is called **sampling variability**, and quantifying it is the core of the course. But it only behaves predictably when the sample is chosen by a **random** mechanism. Before any formula, you have to ask: where did these data come from?',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'A census is a sample of size N',
          text: 'Measuring every unit is a **census**. Game telemetry can feel like a census — you log every match — but it is a census of *the past*, of *players who are still playing*, and of *what the logging code captured*. The questions you care about ("what will happen if we ship this?") are usually about a population you have not fully seen.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the description of this study.',
      template: 'An analyst wants the proportion of **all** $2.4$ million active players who have finished the campaign. She picks $1{,}500$ players at random and finds that $31\\%$ of them have finished. The $2.4$ million players are the ___; the $1{,}500$ players are the ___; the true proportion among all active players is a ___; the $31\\%$ is a ___.',
      blanks: [{ answers: ['population'] }, { answers: ['sample'] }, { answers: ['parameter'] }, { answers: ['statistic'] }],
      wordBank: ['population', 'sample', 'parameter', 'statistic', 'census', 'variable'],
      explanation: 'The **population** is everyone the question is about ($2.4$ million players); the **sample** is the $1{,}500$ actually examined. The true proportion $p$ describes the population, so it is a **parameter** (fixed but unknown); $\\hat{p} = 0.31$ is computed from the sample, so it is a **statistic**, and a different random sample would give a slightly different value. It is not a census, because not every player was checked.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Kinds of variables',
      blocks: [
        {
          type: 'p',
          text: 'A data set is a table: one row per unit (a **case**), one column per measured property (a **variable**). The kind of variable decides which summaries, graphs and tests make sense, so classify before you compute.',
        },
        {
          type: 'definition',
          term: 'Categorical vs quantitative',
          text: 'A [[stat-categorical-variable|categorical variable]] places each unit in a group: region, map, weapon, "crashed or not". It is **nominal** if the groups have no order and **ordinal** if they do (Bronze < Silver < Gold). A [[stat-quantitative-variable|quantitative variable]] is a numerical measurement for which arithmetic makes sense. It is **discrete** if its possible values can be listed (kills: $0, 1, 2, \\dots$) and **continuous** if it can take any value in an interval (session length, frame time, latency).',
        },
        {
          type: 'table',
          headers: ['Column in a match log', 'Type', 'Typical summary'],
          rows: [
            ['`region` (NA, EU, APAC)', 'categorical, nominal', 'counts, proportions'],
            ['`rank_tier` (Bronze … Diamond)', 'categorical, ordinal', 'proportions, median tier'],
            ['`crashed` (yes / no)', 'categorical (binary)', 'proportion $\\hat{p}$'],
            ['`kills`', 'quantitative, discrete', 'mean, median, spread'],
            ['`session_minutes`, `frame_ms`', 'quantitative, continuous', 'mean, median, spread, percentiles'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Numbers that are not quantities',
          text: 'Error codes, ZIP codes, player IDs and jersey numbers are written with digits but are **categorical**: the "average error code" is meaningless. Likewise, coding Bronze $= 1$, Silver $= 2$, Gold $= 3$ and averaging assumes the gap Bronze→Silver equals Silver→Gold, which nobody checked. Ask: does subtracting two values give a meaningful amount?',
        },
        {
          type: 'p',
          text: 'Two practical notes. Continuous variables are always *recorded* with finite precision (milliseconds, whole seconds), but we still model them as continuous: with fine enough resolution, the difference does not matter. And a binary categorical variable coded $0/1$ is special: its mean *is* a proportion, because averaging $0$s and $1$s counts the $1$s. That trick turns "proportion of crashed sessions" into "mean of the `crashed` column".',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Which column of a match-telemetry table is **quantitative and discrete**?',
      options: [
        { text: 'Match duration, measured by the server clock', why: 'Duration is a measurement that could take any value in an interval, so it is continuous, even though it is stored rounded to milliseconds.' },
        { text: 'Rank tier (Bronze, Silver, Gold, Platinum, Diamond)', why: 'The tiers are ordered categories: categorical, ordinal. Differences between tiers are not defined amounts.' },
        { text: 'Number of times the player died in the match', correct: true, why: 'Deaths are counts: $0, 1, 2, \\dots$ — numerical, with meaningful arithmetic, and the possible values can be listed. Quantitative discrete.' },
        { text: 'Server region code ($1$ = NA, $2$ = EU, $3$ = APAC)', why: 'The digits are labels. "EU minus NA $= 1$" means nothing, so this is categorical (nominal).' },
      ],
      explanation: 'Ask two questions. Does arithmetic on the values make sense? (Region codes and tiers: no, so categorical.) If so, can you list the possible values, or do they fill an interval? Deaths are listable counts (discrete); duration fills an interval (continuous).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Observational studies and experiments',
      blocks: [
        {
          type: 'p',
          text: 'Telemetry shows that players who join a guild in their first week are twice as likely to still be playing after $90$ days. Should you force every new player into a guild? Not so fast. Players who join guilds early are probably more motivated to begin with, and motivation alone could explain the higher retention.',
        },
        {
          type: 'definition',
          term: 'Observational study vs experiment',
          text: 'In an [[stat-observational-study|observational study]] you record what units did on their own, without assigning anything. In an **experiment** you *impose* treatments on the units and compare the responses. A [[stat-randomized-experiment|randomized experiment]] assigns the treatments by a chance mechanism.',
        },
        {
          type: 'p',
          text: 'Motivation in the guild example is a [[stat-confounding-variable|confounding variable]]: it is associated with both the "treatment" (joining a guild) and the response (retention), so their effects are tangled together. Observational data can show **association**; by themselves they cannot show **causation**, because some confounder you did not measure may be doing the work.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arexp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs><rect x="8" y="80" width="112" height="64" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="64" y="106" text-anchor="middle" font-size="13">20,000 new</text><text x="64" y="124" text-anchor="middle" font-size="13">players</text><text x="64" y="166" text-anchor="middle" font-size="11" class="t-gray">experimental units</text><line x1="120" y1="112" x2="160" y2="112" stroke="currentColor" stroke-width="1.5"/><text x="166" y="106" font-size="12" class="t-purple" font-weight="600">random</text><text x="166" y="121" font-size="12" class="t-purple" font-weight="600">assignment</text><path d="M240 100 L262 56" stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#arexp)"/><path d="M240 124 L262 168" stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#arexp)"/><rect x="266" y="26" width="120" height="56" rx="8" fill="none" class="s-gray" stroke-width="1.5"/><text x="326" y="49" text-anchor="middle" font-size="13" font-weight="600">Group A</text><text x="326" y="67" text-anchor="middle" font-size="12">old tutorial</text><text x="326" y="98" text-anchor="middle" font-size="11" class="t-gray">control</text><rect x="266" y="142" width="120" height="56" rx="8" fill="none" class="s-blue" stroke-width="1.5"/><text x="326" y="165" text-anchor="middle" font-size="13" font-weight="600" class="t-blue">Group B</text><text x="326" y="183" text-anchor="middle" font-size="12">new tutorial</text><text x="326" y="214" text-anchor="middle" font-size="11" class="t-gray">treatment</text><path d="M386 54 L420 100" stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#arexp)"/><path d="M386 170 L420 124" stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#arexp)"/><rect x="420" y="84" width="96" height="56" rx="8" fill="none" class="s-orange" stroke-width="1.5"/><text x="468" y="106" text-anchor="middle" font-size="12" class="t-orange" font-weight="600">compare</text><text x="468" y="124" text-anchor="middle" font-size="12">day-7 retention</text></svg>', // fig:experiment
          alt: 'Diagram of an A/B test: 20,000 new players (the experimental units) go through random assignment into Group A (old tutorial, the control) and Group B (new tutorial, the treatment). Arrows from both groups lead to a box labeled compare day-7 retention.',
          caption: 'An A/B test is a randomized experiment. The coin flip, not the player, decides who gets which tutorial.',
          maxWidth: 500,
        },
        {
          type: 'list',
          items: [
            '**Control**: compare against a group that gets the current version (or a placebo), run at the same time, so that everything except the treatment is the same — same patch, same season, same marketing.',
            '**Randomization**: let chance decide who gets which treatment.',
            '**Replication**: use enough units that chance differences between groups average out.',
            '**Blinding** where possible: playtesters who know they have the "new" controller may rate it higher just for being new.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why randomization is the magic ingredient',
          text: 'If a coin decides who gets the new tutorial, then motivation, skill, hardware, time zone — every confounder, **including the ones you never thought to measure** — is spread across both groups in the same way on average. So a systematic difference in outcomes can only come from the treatment (or from chance, which Unit 8 teaches you to quantify). No amount of statistical adjustment in an observational study can guarantee this for unmeasured confounders. That is why A/B tests, not dashboards of correlations, are how studios decide.',
        },
        {
          type: 'p',
          text: 'Experiments are not always possible: you cannot randomly assign players to have slow internet, or soldiers to deployments, or people to smoke. Then you use careful observational studies, measure the confounders you can, and state conclusions as associations.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'Telemetry from $8$ million players shows that those who joined a guild in week $1$ have twice the $90$-day retention of those who did not. Because the sample is so large, this proves that pushing every new player into a guild would double retention.',
      answer: false,
      explanation: 'This is an observational study, and sample size does not cure confounding. Players who choose to join guilds early differ from those who do not (motivation, friends who already play, time available), and those differences also affect retention. Forcing unmotivated players into guilds need not help them at all. To learn the causal effect, run a randomized experiment — for example, randomly show half of new players a prominent guild invitation and compare retention.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'How to sample',
      blocks: [
        {
          type: 'p',
          text: 'To learn about a population from a sample, the sample has to be chosen by a known random mechanism. The gold standard is the [[stat-simple-random-sample|simple random sample]] (SRS) of size $n$: every possible subset of $n$ units is equally likely to be the sample. In code it is a partial [[dm-fisher-yates|Fisher–Yates shuffle]] of the list of units: shuffle just the first $n$ positions and take them.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg"><text x="88.0" y="24" text-anchor="middle" font-size="13" font-weight="600">Simple random</text><circle cx="28" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="45" cy="44" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="62" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="79" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="96" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="113" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="130" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="147" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="28" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="45" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="62" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="79" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="96" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="113" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="130" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="147" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="28" cy="78" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="45" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="62" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="79" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="96" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="113" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="130" cy="78" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="147" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="28" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="45" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="62" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="79" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="96" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="113" cy="95" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="130" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="147" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="28" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="45" cy="112" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="62" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="79" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="96" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="113" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="130" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="147" cy="112" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="28" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="45" cy="129" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="62" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="79" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="96" cy="129" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="113" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="130" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="147" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><text x="88.0" y="152" text-anchor="middle" font-size="11" class="t-gray">any 8 equally likely</text><text x="260.0" y="24" text-anchor="middle" font-size="13" font-weight="600">Stratified</text><rect x="191" y="36" width="137" height="33" rx="4" class="f-blue" fill-opacity="0.12"/><rect x="191" y="70" width="137" height="33" rx="4" class="f-green" fill-opacity="0.12"/><rect x="191" y="104" width="137" height="33" rx="4" class="f-purple" fill-opacity="0.12"/><circle cx="200" cy="44" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="217" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="234" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="251" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="268" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="285" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="302" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="319" cy="44" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="200" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="217" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="234" cy="61" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="251" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="268" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="285" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="302" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="319" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="200" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="217" cy="78" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="234" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="251" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="268" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="285" cy="78" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="302" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="319" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="200" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="217" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="234" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="251" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="268" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="285" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="302" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="319" cy="95" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="200" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="217" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="234" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="251" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="268" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="285" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="302" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="319" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="200" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="217" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="234" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="251" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="268" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="285" cy="129" r="5.5" class="f-blue s-blue" stroke-width="1"/><circle cx="302" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="319" cy="129" r="5.5" class="f-blue s-blue" stroke-width="1"/><text x="260.0" y="152" text-anchor="middle" font-size="11" class="t-gray">random within each stratum</text><text x="432.0" y="24" text-anchor="middle" font-size="13" font-weight="600">Cluster</text><rect x="364" y="36" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="398" y="36" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="432" y="36" width="33" height="33" rx="4" fill="none" class="s-orange" stroke-width="1.6"/><rect x="466" y="36" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="364" y="70" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="398" y="70" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="432" y="70" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="466" y="70" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="364" y="104" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="398" y="104" width="33" height="33" rx="4" fill="none" class="s-orange" stroke-width="1.6"/><rect x="432" y="104" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><rect x="466" y="104" width="33" height="33" rx="4" fill="none" class="s-gray" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="372" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="389" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="406" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="423" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="440" cy="44" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="457" cy="44" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="474" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="491" cy="44" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="372" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="389" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="406" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="423" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="440" cy="61" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="457" cy="61" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="474" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="491" cy="61" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="372" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="389" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="406" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="423" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="440" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="457" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="474" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="491" cy="78" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="372" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="389" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="406" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="423" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="440" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="457" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="474" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="491" cy="95" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="372" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="389" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="406" cy="112" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="423" cy="112" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="440" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="457" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="474" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="491" cy="112" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="372" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="389" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="406" cy="129" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="423" cy="129" r="5.5" class="f-orange s-orange" stroke-width="1"/><circle cx="440" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="457" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="474" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="491" cy="129" r="4" fill="none" class="s-gray" stroke-width="1.2"/><text x="432.0" y="152" text-anchor="middle" font-size="11" class="t-gray">all of 2 random clusters</text><text x="174.0" y="184" text-anchor="middle" font-size="13" font-weight="600">Systematic</text><circle cx="114" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="131" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="148" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="165" cy="204" r="5.5" class="f-teal s-teal" stroke-width="1"/><circle cx="182" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="199" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="216" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="233" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="114" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="131" cy="221" r="5.5" class="f-teal s-teal" stroke-width="1"/><circle cx="148" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="165" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="182" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="199" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="216" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="233" cy="221" r="5.5" class="f-teal s-teal" stroke-width="1"/><circle cx="114" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="131" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="148" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="165" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="182" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="199" cy="238" r="5.5" class="f-teal s-teal" stroke-width="1"/><circle cx="216" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="233" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="114" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="131" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="148" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="165" cy="255" r="5.5" class="f-teal s-teal" stroke-width="1"/><circle cx="182" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="199" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="216" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="233" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="114" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="131" cy="272" r="5.5" class="f-teal s-teal" stroke-width="1"/><circle cx="148" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="165" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="182" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="199" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="216" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="233" cy="272" r="5.5" class="f-teal s-teal" stroke-width="1"/><circle cx="114" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="131" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="148" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="165" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="182" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="199" cy="289" r="5.5" class="f-teal s-teal" stroke-width="1"/><circle cx="216" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="233" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><text x="174.0" y="312" text-anchor="middle" font-size="11" class="t-gray">every 6th, random start</text><text x="346.0" y="184" text-anchor="middle" font-size="13" font-weight="600">Convenience</text><text x="271" y="311" font-size="11" class="t-red">you</text><circle cx="273" cy="295" r="3" class="f-red"/><circle cx="286" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="303" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="320" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="337" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="354" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="371" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="388" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="405" cy="204" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="286" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="303" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="320" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="337" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="354" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="371" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="388" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="405" cy="221" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="286" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="303" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="320" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="337" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="354" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="371" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="388" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="405" cy="238" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="286" cy="255" r="5.5" class="f-red s-red" stroke-width="1"/><circle cx="303" cy="255" r="5.5" class="f-red s-red" stroke-width="1"/><circle cx="320" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="337" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="354" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="371" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="388" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="405" cy="255" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="286" cy="272" r="5.5" class="f-red s-red" stroke-width="1"/><circle cx="303" cy="272" r="5.5" class="f-red s-red" stroke-width="1"/><circle cx="320" cy="272" r="5.5" class="f-red s-red" stroke-width="1"/><circle cx="337" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="354" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="371" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="388" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="405" cy="272" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="286" cy="289" r="5.5" class="f-red s-red" stroke-width="1"/><circle cx="303" cy="289" r="5.5" class="f-red s-red" stroke-width="1"/><circle cx="320" cy="289" r="5.5" class="f-red s-red" stroke-width="1"/><circle cx="337" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="354" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="371" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="388" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><circle cx="405" cy="289" r="4" fill="none" class="s-gray" stroke-width="1.2"/><text x="346.0" y="312" text-anchor="middle" font-size="11" class="t-gray">whoever is nearest</text></svg>', // fig:sampling
          alt: 'Five panels, each a grid of 48 dots with the sampled dots filled. Simple random: 8 dots scattered at random. Stratified: the grid is split into three colored bands of two rows each, and a few dots are chosen at random within each band. Cluster: the grid is divided into 2-by-2 blocks and two whole blocks are chosen. Systematic: every 6th dot in reading order from a random start. Convenience: the 8 dots nearest to a marker labeled you.',
          caption: 'Five ways to pick $8$ of $48$ units. Only the last one involves no randomness at all — and it is the one that most real "surveys" use.',
          maxWidth: 520,
        },
        {
          type: 'list',
          items: [
            '[[stat-stratified-sampling|Stratified sampling]]: split the population into groups that differ (regions, platforms, skill brackets) and take an SRS inside each. Guarantees every group is represented and usually gives more precise estimates than an SRS of the same size.',
            '[[stat-cluster-sampling|Cluster sampling]]: split the population into natural groups (servers, guilds, military units, schools), pick a few groups at random, and measure **everyone** in them. Cheap when units are spread out, but less precise, because members of a cluster tend to resemble each other.',
            '[[stat-systematic-sampling|Systematic sampling]]: take every $k$-th unit from a list, starting at a random position in $1, \\dots, k$. Easy, and fine unless the list has a period that lines up with $k$ (every $10$th match on a server that rotates through $10$ maps gives one map only).',
            '[[stat-convenience-sampling|Convenience sampling]]: whoever is easiest to reach — your Discord, the playtesters in the building, forum volunteers. No chance mechanism, so no way to know how unrepresentative it is.',
          ],
        },
        {
          type: 'derivation',
          title: 'Combining strata: a weighted estimate',
          steps: [
            { tex: '\\text{Strata: NA } 50\\%,\\ \\text{EU } 30\\%,\\ \\text{APAC } 20\\% \\text{ of players}', why: 'The population shares $W_h$ of each stratum $h$ are known from the account database.' },
            { tex: 'n = 400 \\implies n_{\\text{NA}} = 200,\\ n_{\\text{EU}} = 120,\\ n_{\\text{APAC}} = 80', why: '**Proportional allocation**: each stratum gets $n W_h$ of the sample.' },
            { tex: '\\hat{p}_{\\text{NA}} = 0.62,\\quad \\hat{p}_{\\text{EU}} = 0.55,\\quad \\hat{p}_{\\text{APAC}} = 0.70', why: 'The proportion who like a proposed change, computed separately inside each stratum.' },
            { tex: '\\hat{p} = \\sum_h W_h \\hat{p}_h = 0.5(0.62) + 0.3(0.55) + 0.2(0.70)', why: 'The population proportion is the population-share-weighted average of the stratum proportions — this is the law of total probability applied to estimates.' },
            { tex: '= 0.310 + 0.165 + 0.140 = 0.615', why: 'With proportional allocation this equals the plain proportion of the whole sample. With any other allocation, you **must** weight.' },
          ],
          result: 'About $61.5\\%$ of all players like the change. Weighting by $W_h$ is what lets you deliberately oversample a small but important group (pros, a new region) without biasing the overall estimate.',
        },
        {
          type: 'code',
          title: 'srs.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <cstdint>
#include <numeric>
#include <random>
#include <utility>
#include <vector>

std::mt19937_64 rng(42);

// Uniform integer in {0, ..., m-1} without modulo bias (rejection sampling).
std::uint64_t below(std::uint64_t m) {
    const std::uint64_t limit = UINT64_MAX - UINT64_MAX % m;  // largest multiple of m
    std::uint64_t r;
    do { r = rng(); } while (r >= limit);
    return r % m;
}

// Simple random sample of n distinct ids from {0, ..., N-1}: partial Fisher-Yates.
std::vector<int> simpleRandomSample(int N, int n) {
    std::vector<int> ids(N);
    std::iota(ids.begin(), ids.end(), 0);
    for (int i = 0; i < n; ++i) {
        int j = i + int(below(N - i));     // uniform over the not-yet-chosen part
        std::swap(ids[i], ids[j]);
    }
    ids.resize(n);
    return ids;
}

int main() {
    for (int id : simpleRandomSample(1'000'000, 8)) std::printf("%d ", id);
    std::printf("\\n");
}`,
          output: `120406 860388 289018 737432 852105 722673 291510 338860 `,
          annotations: [
            { lines: '11-16', text: 'Plain `rng() % m` would favor small remainders slightly. Rejecting the top sliver of values makes every remainder exactly equally likely.' },
            { lines: '22-25', text: 'After step $i$, positions $0..i$ hold a uniformly random ordered selection. Stopping after $n$ steps costs $O(n)$ swaps (plus the $O(N)$ setup), and every $n$-subset is equally likely: a true SRS.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A survey uses **equal** allocation: $200$ casual, $200$ competitive and $200$ pro players. Yes-answers: $60$ casual, $120$ competitive, $180$ pro. In the population, $70\\%$ of players are casual, $25\\%$ competitive and $5\\%$ pro. Estimate the proportion of **all** players who would answer yes. Give $3$ decimal places.',
      hint: 'Find $\\hat{p}_h$ in each stratum, then weight by the **population** shares, not the sample shares.',
      label: '$\\hat{p} =$',
      answer: '0.7*0.3 + 0.25*0.6 + 0.05*0.9',
      answerTex: '0.405',
      tolerance: 0.0005,
      explanation: 'Stratum proportions: $60/200 = 0.30$, $120/200 = 0.60$, $180/200 = 0.90$. Weighting by population shares: $0.70(0.30) + 0.25(0.60) + 0.05(0.90) = 0.210 + 0.150 + 0.045 = 0.405$. The unweighted proportion of the whole sample, $360/600 = 0.60$, is badly biased upward, because the sample has $33\\%$ pros while the population has $5\\%$, and pros say yes most often.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'You need a systematic sample of $300$ matches from a list of $12{,}000$ match IDs numbered $1$ to $12{,}000$. You take every $k$-th match with $k = 12000/300$, starting from a random position, which turns out to be $17$. What is the ID of the $10$th match in your sample?',
      hint: 'The sample is $17, 17 + k, 17 + 2k, \\dots$',
      label: 'ID',
      answer: '377',
      explanation: 'The interval is $k = 12000/300 = 40$, so the sample is $17, 57, 97, \\dots$ and the $m$-th selected ID is $17 + (m - 1) \\cdot 40$. For $m = 10$: $17 + 9 \\cdot 40 = 377$. Each match has probability $1/40$ of being chosen, but unlike an SRS most subsets are impossible (two adjacent IDs can never both be chosen), which is harmless unless the list has a pattern with period related to $40$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'How samples go wrong: bias',
      blocks: [
        {
          type: 'p',
          text: 'A sampling method is **biased** if it systematically favors some outcomes over others, so that its estimates miss the parameter in a consistent direction. The three classic culprits:',
        },
        {
          type: 'list',
          items: [
            '[[stat-selection-bias|Selection bias]]: the way units enter the sample is related to what you measure. A balance survey posted in the competitive Discord over-represents competitive players; a hardware survey run inside the game only reaches machines that can run the game.',
            '[[stat-nonresponse-bias|Nonresponse bias]]: units are chosen at random, but those who answer differ from those who do not. Angry players reply to "How was the patch?" emails; content ones ignore them. Forum polls combine both problems: **voluntary response**.',
            '[[stat-survivorship-bias|Survivorship bias]]: you only see the units that "survived" some filter, and the filter is related to the question.',
          ],
        },
        {
          type: 'heading',
          text: 'The bombers that came back',
        },
        {
          type: 'p',
          text: 'In World War II, the U.S. military studied bullet holes on bombers returning from missions, with the idea of adding armor where the holes clustered: wings, fuselage, tail. The statistician Abraham Wald, of Columbia\'s Statistical Research Group, pointed out the flaw: these were the planes that **made it back**. Hits to the wings and fuselage were evidently survivable. The places with few holes — engines, cockpit — were where hits brought planes down, so those planes were never in the sample. Armor belongs where the returning planes are clean.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg"><path d="M15 150 L180 118 L220 118 L385 150 L385 162 L220 160 L180 160 L15 162 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M130 300 L188 288 L212 288 L270 300 L270 310 L130 310 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M200 40 C220 42 222 70 222 100 L216 300 C214 318 186 318 184 300 L178 100 C178 70 180 42 200 40 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M190 62 Q200 50 210 62 L212 78 L188 78 Z" class="s-blue" fill="none" stroke-width="1.6"/><rect x="71" y="104" width="18" height="44" rx="7" class="s-blue" fill="none" stroke-width="1.6"/><rect x="129" y="104" width="18" height="44" rx="7" class="s-blue" fill="none" stroke-width="1.6"/><rect x="253" y="104" width="18" height="44" rx="7" class="s-blue" fill="none" stroke-width="1.6"/><rect x="311" y="104" width="18" height="44" rx="7" class="s-blue" fill="none" stroke-width="1.6"/><circle cx="41.5" cy="152.7" r="3" class="f-red"/><circle cx="61.7" cy="151.6" r="3" class="f-red"/><circle cx="43.8" cy="153.0" r="3" class="f-red"/><circle cx="29.9" cy="152.1" r="3" class="f-red"/><circle cx="49.1" cy="155.5" r="3" class="f-red"/><circle cx="26.0" cy="149.6" r="3" class="f-red"/><circle cx="338.9" cy="155.7" r="3" class="f-red"/><circle cx="364.8" cy="146.5" r="3" class="f-red"/><circle cx="377.2" cy="157.6" r="3" class="f-red"/><circle cx="363.1" cy="153.4" r="3" class="f-red"/><circle cx="341.8" cy="146.2" r="3" class="f-red"/><circle cx="357.7" cy="146.7" r="3" class="f-red"/><circle cx="100.1" cy="140.8" r="3" class="f-red"/><circle cx="95.8" cy="145.3" r="3" class="f-red"/><circle cx="106.9" cy="152.8" r="3" class="f-red"/><circle cx="292.0" cy="148.8" r="3" class="f-red"/><circle cx="291.5" cy="149.2" r="3" class="f-red"/><circle cx="290.3" cy="141.6" r="3" class="f-red"/><circle cx="175.0" cy="155.9" r="3" class="f-red"/><circle cx="172.6" cy="147.8" r="3" class="f-red"/><circle cx="229.7" cy="134.4" r="3" class="f-red"/><circle cx="229.3" cy="130.0" r="3" class="f-red"/><circle cx="206.4" cy="214.0" r="3" class="f-red"/><circle cx="208.3" cy="212.5" r="3" class="f-red"/><circle cx="211.0" cy="263.2" r="3" class="f-red"/><circle cx="188.0" cy="193.1" r="3" class="f-red"/><circle cx="209.8" cy="221.7" r="3" class="f-red"/><circle cx="211.5" cy="213.7" r="3" class="f-red"/><circle cx="189.8" cy="239.2" r="3" class="f-red"/><circle cx="206.7" cy="199.7" r="3" class="f-red"/><circle cx="190.1" cy="206.6" r="3" class="f-red"/><circle cx="211.1" cy="253.4" r="3" class="f-red"/><circle cx="154.2" cy="298.5" r="3" class="f-red"/><circle cx="152.1" cy="296.6" r="3" class="f-red"/><circle cx="235.6" cy="297.8" r="3" class="f-red"/><circle cx="207.1" cy="300.5" r="3" class="f-red"/><circle cx="162.9" cy="303.3" r="3" class="f-red"/><circle cx="18" cy="22" r="3.5" class="f-red"/><text x="28" y="26" font-size="12">bullet holes on planes that came back</text><line x1="320" y1="100" x2="350" y2="72" class="s-blue" stroke-width="1.4"/><text x="352" y="62" font-size="12" class="t-blue">no holes on engines</text><text x="352" y="77" font-size="12" class="t-blue">or cockpit: planes hit</text><text x="352" y="92" font-size="12" class="t-blue">there did not return</text></svg>', // fig:bomber
          alt: 'Top view of a four-engine bomber. Red dots marking bullet holes cover the outer wings, the middle of the fuselage and the tail. The four engines and the cockpit, outlined in blue, have no holes. A label says: no holes on engines or cockpit, planes hit there did not return.',
          caption: 'Where are the missing holes? On the planes that did not return. (The story is often embellished in retelling, but Wald\'s analysis of survivable damage is real.)',
          maxWidth: 500,
        },
        {
          type: 'p',
          text: 'Survivorship bias is everywhere in game data. Study only players who reached the endgame and the early game looks fine: the players it drove away are not in your data. Study only crash reports that were successfully uploaded and you miss crashes that kill the reporter. Study successful games to learn "what works" and you ignore the many failed games that did the same things.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'The biggest poll that ever failed',
          text: 'In 1936 the *Literary Digest* mailed about $10$ million ballots, got roughly $2.4$ million back, and predicted a landslide win for Alf Landon. Franklin Roosevelt won about $61\\%$ of the vote and $46$ of $48$ states. The mailing list came from sources such as phone books and car registrations — in the Depression, a wealthier group (selection bias) — and only about a quarter replied (nonresponse bias). George Gallup, with a far smaller but better-designed sample, called the winner correctly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A studio examines $5{,}000$ players who reached the level cap and finds that $80\\%$ of them skipped the optional tutorial. A producer concludes: "The tutorial doesn\'t matter for long-term players — cut it." What is the main flaw?',
      options: [
        { text: 'The sample is too small to draw conclusions', why: '$5{,}000$ players is plenty to estimate a proportion precisely. The problem is *which* players were studied, not how many.' },
        { text: 'Survivorship bias: only players who stayed long enough to reach the cap were studied', correct: true, why: 'Players who skipped the tutorial and then quit in confusion never reach the cap, so they cannot appear in this sample. To learn the tutorial\'s effect, compare retention of all new players who did and did not take it — or better, randomize it.' },
        { text: 'Nonresponse bias, because many players did not answer', why: 'Nobody was asked anything; these are game logs. The filter here is survival to the level cap, not responding to a survey.' },
        { text: 'They should have reported the median instead of a percentage', why: 'The summary statistic is fine. No choice of summary fixes a sample that excludes exactly the players the question is about.' },
      ],
      explanation: 'The question is about *all* new players, but the sample was filtered by an outcome (reaching the cap) that the tutorial may itself affect. Players hurt by skipping the tutorial are removed before you look. This is survivorship bias — the bombers again.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Why more data does not fix bias',
      blocks: [
        {
          type: 'p',
          text: 'Every estimate misses the truth for two different reasons. **Random error** comes from the luck of the draw and averages out: with a random sample, its typical size shrinks like $1/\\sqrt{n}$. **Bias** comes from the design and does not average out: a method that over-represents hardcore players does so in every sample, at every size.',
        },
        {
          type: 'math',
          tex: '\\hat{p} = p + \\underbrace{\\text{bias}}_{\\text{fixed by the design}} + \\underbrace{\\text{random error}}_{\\text{typical size} \\, \\approx \\, \\sqrt{p(1-p)/n}}',
          caption: 'The $\\sqrt{p(1-p)/n}$ is the **standard error** of a proportion, derived in Unit 7. Here, just notice the $n$ in the denominator — and that bias has no $n$ at all.',
        },
        {
          type: 'graph',
          x: [0, 2000],
          y: [0.2, 0.9],
          xStep: 250,
          yStep: 0.1,
          height: 280,
          functions: [
            { expr: '0.38 + b', color: 'orange', label: 'what the method converges to: $p + \\text{bias}$' },
            { expr: '0.38 + b + 2sqrt(0.38*0.62/x)', color: 'orange', dashed: true, domain: [10, 2000] },
            { expr: '0.38 + b - 2sqrt(0.38*0.62/x)', color: 'orange', dashed: true, domain: [10, 2000] },
          ],
          hlines: [{ y: 0.38, label: 'true p = 0.38', color: 'green' }],
          vlines: [{ x: 'n', label: 'n', color: 'gray' }],
          sliders: [
            { name: 'b', min: 0, max: 0.3, step: 0.01, value: 0.15, label: 'bias $b$ of the sampling method' },
            { name: 'n', min: 20, max: 2000, step: 10, value: 200, label: 'sample size $n$' },
          ],
          readouts: [
            { label: 'random error, $2\\sqrt{p(1-p)/n} =$', expr: '2sqrt(0.38*0.62/n)', digits: 3 },
            { label: 'bias $=$', expr: 'b', digits: 3 },
            { label: 'typical total error $\\sqrt{b^2 + p(1-p)/n} =$', expr: 'sqrt(b^2 + 0.38*0.62/n)', digits: 3 },
          ],
          caption: 'The dashed band shows where about $95\\%$ of estimates from a method land. Increasing $n$ squeezes the band, but around the **wrong** center unless $b = 0$. With $b = 0.15$, the total error never drops below $0.15$, however large $n$ gets.',
        },
        {
          type: 'code',
          title: 'forum_poll.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>
#include <vector>

std::mt19937_64 rng(2024);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }  // uniform in [0, 1)

struct Player { bool hardcore; bool wantsChange; };

int main() {
    // Population: 1,000,000 players. 30% hardcore (80% of them want the change),
    // 70% casual (20% want it). True proportion = 0.3*0.8 + 0.7*0.2 = 0.38.
    const int N = 1'000'000;
    std::vector<Player> pop(N);
    int wanting = 0;
    for (Player& p : pop) {
        p.hardcore = uniform01() < 0.30;
        p.wantsChange = uniform01() < (p.hardcore ? 0.80 : 0.20);
        wanting += p.wantsChange;
    }
    std::printf("true proportion:            %.3f\\n", double(wanting) / N);

    // Simple random samples (with replacement): every player equally likely.
    for (int n : {100, 1'000, 10'000}) {
        int yes = 0;
        for (int i = 0; i < n; ++i) yes += pop[std::size_t(uniform01() * N)].wantsChange;
        std::printf("random sample, n = %6d:   %.3f\\n", n, double(yes) / n);
    }

    // Forum poll: hardcore players respond with prob 0.10, casual with prob 0.01.
    int responders = 0, yes = 0;
    for (const Player& p : pop)
        if (uniform01() < (p.hardcore ? 0.10 : 0.01)) { ++responders; yes += p.wantsChange; }
    std::printf("forum poll,    n = %6d:   %.3f\\n", responders, double(yes) / responders);
}`,
          output: `true proportion:            0.381
random sample, n =    100:   0.420
random sample, n =   1000:   0.376
random sample, n =  10000:   0.389
forum poll,    n =  36852:   0.692`,
          annotations: [
            { lines: '16-20', text: 'Build a population where the truth is known (about $38\\%$). Simulation lets you test a sampling method against a known answer — impossible with real data.' },
            { lines: '24-28', text: 'Random samples scatter around the truth, closer as $n$ grows ($\\pm 0.10$ at $n = 100$, $\\pm 0.01$ at $n = 10{,}000$, roughly).' },
            { lines: '30-34', text: 'Voluntary response: hardcore players are $10\\times$ as likely to vote. The poll gets $36{,}852$ answers and is off by $31$ percentage points.' },
          ],
        },
        {
          type: 'p',
          text: 'The forum poll has more than $350$ times as many responses as the $100$-player random sample and is far worse. Its expected value can be computed exactly: responders want the change with probability $\\frac{0.3(0.1)(0.8) + 0.7(0.01)(0.2)}{0.3(0.1) + 0.7(0.01)} = \\frac{0.0254}{0.037} \\approx 0.686$, whatever the number of responses. A small random sample beats a huge biased one.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Big data, same problem',
          text: 'Machine-learning datasets inherit their collection bias: a model trained on players who opted into data sharing, or on matches from high-end PCs only, learns *that* population. Millions of rows make the model confident, not correct. When you evaluate a model, sample the evaluation set from the population you will deploy on.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A community manager analyzes a poll. Tap the first line where the reasoning goes wrong.',
      lines: [
        'Goal: estimate the proportion of **all** active players who want ranked seasons shortened.',
        'We posted a poll on the official forum, and $48{,}000$ players voted.',
        'Of them, $34{,}080$ voted yes, so $\\hat{p} = 34080/48000 = 0.71$.',
        'Because the sample is so large, $\\hat{p}$ must be very close to the proportion among all active players.',
        'So about $71\\%$ of all active players want shorter seasons.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are fine: the goal is clear, and $34080/48000 = 0.71$ is correct arithmetic. Line 4 is the mistake: a large sample shrinks **random** error only when the sample is random. A forum poll is a voluntary-response sample — players who care strongly (and who visit the forum at all) choose to vote — so it can be biased by any amount, and $48{,}000$ votes measure that biased quantity very precisely. The honest conclusion: $71\\%$ of forum voters want shorter seasons; to learn about all players, survey a random sample and chase non-responders.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Put the steps of a well-designed A/B test of a new tutorial in order.',
      lines: [
        'Define the population (new players) and the response variable (day-7 retention) before collecting data.',
        'Randomly assign each new player to the old or the new tutorial.',
        'Run both versions at the same time, with everything else identical.',
        'Measure day-7 retention in each group.',
        'Compare the groups and ask whether the difference is larger than chance variation would produce.',
      ],
      distractors: ['Let each player choose which tutorial to play.'],
      explanation: 'Decide what you are measuring first (choosing the metric after seeing the data invites cherry-picking). Then randomize — this is what makes the groups comparable, including on confounders you cannot see. Running both arms simultaneously keeps time effects (a holiday, a marketing push) out of the comparison. The distractor destroys the design: players who choose the new tutorial differ from those who do not, which turns the experiment back into an observational study.',
    },
  ],
  takeaways: [
    'Statistics is deciding under uncertainty from data. Probability goes model → data; statistics goes data → model, and every answer carries a measure of uncertainty.',
    'A **parameter** ($\\mu$, $\\sigma$, $p$) describes the population and is fixed but unknown; a **statistic** ($\\bar{x}$, $s$, $\\hat{p}$) is computed from a sample and varies from sample to sample.',
    'Variables are categorical (nominal or ordinal) or quantitative (discrete or continuous); classify before you summarize. A $0/1$ variable\'s mean is a proportion.',
    'Observational studies show association; confounders can fake or hide effects. Randomized, controlled experiments (A/B tests) balance every confounder on average, so they can show causation.',
    'Sample with a known random mechanism: SRS, stratified (weight strata by population shares $W_h$), cluster, systematic. Convenience and voluntary-response samples cannot be trusted.',
    'Selection, nonresponse and survivorship bias do not shrink with $n$: random error falls like $1/\\sqrt{n}$, bias stays. A small random sample beats a huge biased one.',
  ],
  reading: [
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'Chapter 1 (Sampling and Data) covers populations, variable types, sampling methods and experimental design with many worked examples.',
    },
    {
      title: 'Wikipedia — Survivorship bias',
      url: 'https://en.wikipedia.org/wiki/Survivorship_bias',
      source: 'wikipedia',
      note: 'The bomber story with Wald\'s reasoning, plus many examples from finance, medicine and history.',
    },
    {
      title: 'Wikipedia — Stratified sampling',
      url: 'https://en.wikipedia.org/wiki/Stratified_sampling',
      source: 'wikipedia',
      note: 'Proportional and optimal allocation, and why stratifying on a variable related to the response improves precision.',
    },
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The calculus-based course this one parallels; its first readings frame the probability/statistics distinction used here.',
    },
  ],
};
