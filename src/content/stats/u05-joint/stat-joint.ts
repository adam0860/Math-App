import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'stat-joint',
  title: 'Joint and Marginal Distributions',
  summary: 'Two random variables at once: joint PMF tables and joint densities (with double integrals over regions), marginal and conditional distributions, conditional expectation, and independence of random variables by factorization.',
  minutes: 20,
  objectives: [
    'Read a joint PMF table and compute probabilities of events such as $X > Y$ or $X + Y = 2$',
    'Find marginal distributions by summing or integrating out the other variable',
    'Compute conditional distributions and conditional expectations, and check the law of total expectation',
    'Set up and evaluate a double integral of a joint density over a region, choosing the limits from a sketch',
    'Decide whether two random variables are independent using factorization, including the support condition',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Two random variables at once: the joint PMF',
      blocks: [
        {
          type: 'p',
          text: 'Real questions rarely involve one number. A match produces kills **and** deaths; a network request has latency **and** packet loss; a soldier\'s qualification has a first score **and** a retest score. To ask how such numbers move *together* — "do players with more kills die less?" — you need their **joint** distribution, not two separate ones.',
        },
        {
          type: 'definition',
          term: 'Joint probability mass function',
          text: 'For discrete [[dm-random-variable|random variables]] $X$ and $Y$ on the same sample space, the [[stat-joint-distribution|joint PMF]] is $p_{X,Y}(x, y) = P(X = x \\text{ and } Y = y)$. It satisfies $p_{X,Y}(x, y) \\ge 0$ and $\\sum_x \\sum_y p_{X,Y}(x, y) = 1$, and for any set $A$ of pairs, $P\\big((X, Y) \\in A\\big) = \\sum_{(x, y) \\in A} p_{X,Y}(x, y)$.',
        },
        {
          type: 'p',
          text: 'For two small discrete variables the joint PMF is simply a **table**: one row per value of $X$, one column per value of $Y$, and each cell holds the probability of that combination. Here is a telemetry table for a short arena round, where $X$ = kills and $Y$ = deaths (each capped at $2$):',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 470 258" xmlns="http://www.w3.org/2000/svg"><text x="211.0" y="18" text-anchor="middle" font-size="14">Y = deaths</text><text x="22" y="106.0" text-anchor="middle" font-size="14" transform="rotate(-90 22 106.0)">X = kills</text><text x="137.0" y="38" text-anchor="middle" font-size="13">y = 0</text><text x="211.0" y="38" text-anchor="middle" font-size="13">y = 1</text><text x="285.0" y="38" text-anchor="middle" font-size="13">y = 2</text><text x="373.0" y="38" text-anchor="middle" font-size="13" class="t-blue">p<tspan baseline-shift="sub" font-size="10">X</tspan>(x)</text><text x="90" y="71.0" text-anchor="end" font-size="13">x = 0</text><rect x="100" y="46" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="137.0" y="71.0" text-anchor="middle" font-size="15">0.10</text><rect x="174" y="46" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="211.0" y="71.0" text-anchor="middle" font-size="15">0.15</text><rect x="248" y="46" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="285.0" y="71.0" text-anchor="middle" font-size="15">0.10</text><rect x="336" y="46" width="74" height="40" class="f-blue s-blue" fill-opacity="0.10" stroke-width="1.2"/><text x="373.0" y="71.0" text-anchor="middle" font-size="15" class="t-blue">0.35</text><text x="90" y="111.0" text-anchor="end" font-size="13">x = 1</text><rect x="100" y="86" width="74" height="40" class="f-orange" fill-opacity="0.22" stroke="none"/><rect x="100" y="86" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="137.0" y="111.0" text-anchor="middle" font-size="15">0.15</text><rect x="174" y="86" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="211.0" y="111.0" text-anchor="middle" font-size="15">0.20</text><rect x="248" y="86" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="285.0" y="111.0" text-anchor="middle" font-size="15">0.05</text><rect x="336" y="86" width="74" height="40" class="f-blue s-blue" fill-opacity="0.10" stroke-width="1.2"/><text x="373.0" y="111.0" text-anchor="middle" font-size="15" class="t-blue">0.40</text><text x="90" y="151.0" text-anchor="end" font-size="13">x = 2</text><rect x="100" y="126" width="74" height="40" class="f-orange" fill-opacity="0.22" stroke="none"/><rect x="100" y="126" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="137.0" y="151.0" text-anchor="middle" font-size="15">0.15</text><rect x="174" y="126" width="74" height="40" class="f-orange" fill-opacity="0.22" stroke="none"/><rect x="174" y="126" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="211.0" y="151.0" text-anchor="middle" font-size="15">0.05</text><rect x="248" y="126" width="74" height="40" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="285.0" y="151.0" text-anchor="middle" font-size="15">0.05</text><rect x="336" y="126" width="74" height="40" class="f-blue s-blue" fill-opacity="0.10" stroke-width="1.2"/><text x="373.0" y="151.0" text-anchor="middle" font-size="15" class="t-blue">0.25</text><text x="90" y="203.0" text-anchor="end" font-size="13" class="t-green">p<tspan baseline-shift="sub" font-size="10">Y</tspan>(y)</text><rect x="100" y="178" width="74" height="40" class="f-green s-green" fill-opacity="0.10" stroke-width="1.2"/><text x="137.0" y="203.0" text-anchor="middle" font-size="15" class="t-green">0.40</text><rect x="174" y="178" width="74" height="40" class="f-green s-green" fill-opacity="0.10" stroke-width="1.2"/><text x="211.0" y="203.0" text-anchor="middle" font-size="15" class="t-green">0.40</text><rect x="248" y="178" width="74" height="40" class="f-green s-green" fill-opacity="0.10" stroke-width="1.2"/><text x="285.0" y="203.0" text-anchor="middle" font-size="15" class="t-green">0.20</text><text x="373.0" y="203.0" text-anchor="middle" font-size="15">1.00</text><rect x="100" y="232" width="16" height="14" class="f-orange" fill-opacity="0.22" stroke="currentColor" stroke-width="1"/><text x="124" y="244" font-size="13">event X &gt; Y (more kills than deaths)</text></svg>',
          alt: 'A 3 by 3 table of joint probabilities. Rows x = 0, 1, 2 (kills), columns y = 0, 1, 2 (deaths). Row x = 0: 0.10, 0.15, 0.10. Row x = 1: 0.15, 0.20, 0.05. Row x = 2: 0.15, 0.05, 0.05. Row sums in a blue column: 0.35, 0.40, 0.25. Column sums in a green row: 0.40, 0.40, 0.20. Total 1.00. The three cells below the diagonal (x > y) are shaded orange.',
          caption: 'The joint PMF of kills $X$ and deaths $Y$. The nine cells add to $1$. The shaded cells make up the event $X > Y$; the row and column sums in the margins are the subject of the next card.',
          maxWidth: 470,
        },
        {
          type: 'derivation',
          title: 'Probability of an event: add the cells it contains',
          steps: [
            { tex: '\\{X > Y\\} = \\{(1,0),\\ (2,0),\\ (2,1)\\}', why: 'First list the cells (pairs) where the event happens: more kills than deaths. These are the cells strictly below the diagonal of the table.' },
            { tex: 'P(X > Y) = p(1,0) + p(2,0) + p(2,1)', why: 'The cells are disjoint outcomes, so their probabilities add (the defining property above with $A$ = these three pairs).' },
            { tex: '= 0.15 + 0.15 + 0.05 = 0.35', why: 'Read the three values from the table.' },
          ],
          result: 'A player finishes this round with a positive kill–death difference $35\\%$ of the time. Every question about $X$ and $Y$ jointly — $P(X = Y)$, $P(X + Y \\ge 3)$, $P(X - Y = 1)$ — is answered the same way: find the cells, add them.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A joint PMF is a 2D histogram',
          text: 'In code a joint PMF is a 2D array `p[x][y]`, and estimating one from telemetry is just counting: `++count[kills][deaths]` for each round, then divide by the number of rounds. Heatmaps of kill positions, contingency tables in dashboards and confusion matrices in machine learning are all joint distributions of two discrete variables.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Using the kills/deaths table above, find $P(X + Y = 2)$: the probability that a round has exactly two "events" (kills plus deaths). Give a decimal.',
      hint: 'Which cells have $x + y = 2$? They lie on an anti-diagonal of the table.',
      label: '$P(X + Y = 2) =$',
      answer: '0.45',
      tolerance: 0.0001,
      answerTex: '0.45',
      explanation: 'The pairs with $x + y = 2$ are $(0, 2)$, $(1, 1)$ and $(2, 0)$ — the anti-diagonal from top right to bottom left. Adding their cells: $0.10 + 0.20 + 0.15 = 0.45$. A frequent slip is to add a whole row or column instead; rows fix $X$, columns fix $Y$, and an event about $X + Y$ cuts across both.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Marginal distributions: summing out the other variable',
      blocks: [
        {
          type: 'p',
          text: 'Suppose you only care about kills. The event $\\{X = 1\\}$ is the disjoint union of $\\{X = 1, Y = 0\\}$, $\\{X = 1, Y = 1\\}$ and $\\{X = 1, Y = 2\\}$, so its probability is the **row sum**. Doing this for every value gives the distribution of $X$ alone, called its [[stat-marginal-distribution|marginal distribution]] — because accountants wrote these sums in the margins of the table.',
        },
        {
          type: 'theorem',
          name: 'Marginal PMFs',
          tex: 'p_X(x) = \\sum_{y} p_{X,Y}(x, y), \\qquad p_Y(y) = \\sum_{x} p_{X,Y}(x, y)',
          text: 'Sum over the variable you want to get rid of. This is the law of total probability with the partition $\\{Y = y\\}$.',
        },
        {
          type: 'derivation',
          title: 'Marginals and means from the kills/deaths table',
          steps: [
            { tex: 'p_X(0) = 0.10 + 0.15 + 0.10 = 0.35', why: 'Row $x = 0$: add across the three death counts.' },
            { tex: 'p_X = (0.35,\\ 0.40,\\ 0.25), \\qquad p_Y = (0.40,\\ 0.40,\\ 0.20)', why: 'Same for the other rows ($p_X$) and for the columns ($p_Y$). Each marginal adds to $1$, a good check.' },
            { tex: 'E[X] = 0(0.35) + 1(0.40) + 2(0.25) = 0.90', why: 'An [[dm-expected-value|expected value]] of $X$ alone needs only the marginal of $X$.' },
            { tex: 'E[Y] = 0(0.40) + 1(0.40) + 2(0.20) = 0.80', why: 'Same for deaths, from the column sums.' },
          ],
          result: 'On average a round has $0.9$ kills and $0.8$ deaths. Notice that nothing so far says anything about how kills and deaths are *related* — that information lives in the inside of the table.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Marginals do not determine the joint distribution',
          text: 'Many different tables share the same margins. For example, the table with cells $p(x, y) = p_X(x)\\,p_Y(y)$ — first cell $0.35 \\times 0.40 = 0.14$ instead of $0.10$ — has exactly the margins above, but describes a world where kills and deaths are unrelated. Going from joint to marginals throws information away; you cannot go back. That is why a dashboard showing "average kills" and "average deaths" separately can never tell you whether the two are linked.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'If you know the marginal PMF of $X$ and the marginal PMF of $Y$, you can reconstruct their joint PMF.',
      answer: false,
      explanation: 'False. The marginals are the row and column sums, and many different tables have the same sums. With $X, Y \\in \\{0, 1\\}$ and both marginals $(\\frac{1}{2}, \\frac{1}{2})$, the joint could put $\\frac{1}{4}$ in every cell (independent), or $\\frac{1}{2}$ on $(0,0)$ and $(1,1)$ (always equal), or $\\frac{1}{2}$ on $(0,1)$ and $(1,0)$ (always different). The marginals pin down the joint only with extra information — for instance, that $X$ and $Y$ are independent, in which case $p(x, y) = p_X(x)\\,p_Y(y)$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Conditional distributions and conditional expectation',
      blocks: [
        {
          type: 'p',
          text: 'Now the question a designer actually asks: **given** that a player got $2$ kills, how many times did they die? Conditioning on $X = 2$ keeps only that row of the table and rescales it so it sums to $1$ — exactly [[dm-conditional-probability|conditional probability]] applied cell by cell.',
        },
        {
          type: 'definition',
          term: 'Conditional PMF',
          text: 'For $p_X(x) > 0$, the [[stat-conditional-distribution|conditional distribution]] of $Y$ given $X = x$ is $$p_{Y \\mid X}(y \\mid x) = \\frac{p_{X,Y}(x, y)}{p_X(x)}.$$ Its mean $E[Y \\mid X = x] = \\sum_y y\\,p_{Y\\mid X}(y \\mid x)$ is the **conditional expectation** of $Y$ given $X = x$.',
        },
        {
          type: 'derivation',
          title: 'Deaths given kills',
          steps: [
            { tex: 'p_{Y\\mid X}(\\,\\cdot \\mid 2) = \\left(\\tfrac{0.15}{0.25},\\ \\tfrac{0.05}{0.25},\\ \\tfrac{0.05}{0.25}\\right) = (0.6,\\ 0.2,\\ 0.2)', why: 'Take row $x = 2$ and divide by its total $p_X(2) = 0.25$, so the conditional probabilities add to $1$.' },
            { tex: 'E[Y \\mid X = 2] = 0(0.6) + 1(0.2) + 2(0.2) = 0.6', why: 'The mean of that conditional distribution.' },
            { tex: 'E[Y \\mid X = 0] = \\tfrac{0(0.10) + 1(0.15) + 2(0.10)}{0.35} = 1.0, \\quad E[Y \\mid X = 1] = \\tfrac{0.20 + 0.10}{0.40} = 0.75', why: 'Same recipe for the other rows: weight the deaths by the row\'s cells, divide by the row total.' },
          ],
          result: 'Expected deaths fall from $1.0$ to $0.75$ to $0.6$ as kills go from $0$ to $2$. The function $x \\mapsto E[Y \\mid X = x]$ is called the **regression function** of $Y$ on $X$; fitting a line to it is what linear regression (Unit 10) does.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Averaging the conditional means gives the overall mean',
          text: 'The **law of total expectation** says $E[Y] = \\sum_x E[Y \\mid X = x]\\,p_X(x)$: the overall mean is a weighted average of the row means, weighted by how often each row happens. Check: $1.0(0.35) + 0.75(0.40) + 0.6(0.25) = 0.35 + 0.30 + 0.15 = 0.80 = E[Y]$. It holds because $\\sum_x \\sum_y y\\,\\frac{p(x,y)}{p_X(x)}\\,p_X(x) = \\sum_x \\sum_y y\\,p(x, y)$ — the $p_X(x)$ cancels and you are left with the definition of $E[Y]$ summed cell by cell.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'In the kills/deaths table, find $E[X \\mid Y = 0]$: the expected number of kills in rounds where the player did **not** die. Give the value to $3$ decimal places.',
      hint: 'Use column $y = 0$: cells $0.10, 0.15, 0.15$ with total $p_Y(0) = 0.40$.',
      label: '$E[X \\mid Y = 0] =$',
      answer: '9/8',
      tolerance: 0.0006,
      answerTex: '1.125',
      explanation: 'Conditioning on $Y = 0$ keeps column $0$ and divides by $p_Y(0) = 0.40$: $P(X = x \\mid Y = 0) = (0.25,\\ 0.375,\\ 0.375)$. Then $E[X \\mid Y = 0] = 0(0.25) + 1(0.375) + 2(0.375) = 1.125$. Equivalently $\\frac{0(0.10) + 1(0.15) + 2(0.15)}{0.40} = \\frac{0.45}{0.40}$. Players who survive average more kills than the overall $0.9$ — another sign the variables are related.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Joint densities: probability is volume',
      blocks: [
        {
          type: 'p',
          text: 'For continuous variables — reaction times, positions on a map, two component lifetimes — single points have probability $0$, just as in one dimension. Probability now comes from a **surface** $z = f(x, y)$ over the plane: the probability that $(X, Y)$ lands in a region $A$ is the **volume** under the surface above $A$.',
        },
        {
          type: 'definition',
          term: 'Joint probability density function',
          text: 'Continuous $X$ and $Y$ have joint density $f_{X,Y}(x, y) \\ge 0$ if for every (reasonable) region $A$ of the plane $$P\\big((X, Y) \\in A\\big) = \\iint_A f_{X,Y}(x, y)\\,dA,$$ and the total volume is $1$: $\\iint_{\\mathbb{R}^2} f_{X,Y}\\,dA = 1$.',
        },
        {
          type: 'p',
          text: 'You have not met [[stat-double-integral|double integrals]] before, but you can already compute them, because they reduce to two ordinary [[definite-integral|definite integrals]]. Slice the region into thin vertical strips. On the strip at a fixed $x$, integrate $f(x, y)$ in $y$ — treating $x$ as a constant — to get the area of that slice of the solid. Then integrate those slice areas in $x$. The only new skill is reading the **limits** of the inner integral off a sketch: they may depend on $x$.',
        },
        {
          type: 'math',
          tex: '\\iint_A f(x, y)\\,dA = \\int_{x = a}^{b} \\left( \\int_{y = g_1(x)}^{g_2(x)} f(x, y)\\,dy \\right) dx',
          caption: 'For a region $A = \\{a \\le x \\le b,\\ g_1(x) \\le y \\le g_2(x)\\}$. Fubini\'s theorem says slicing horizontally instead (integrating in $x$ first) gives the same volume, so you may choose the easier order.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 470 268" xmlns="http://www.w3.org/2000/svg"><polygon points="60,230 250,230 60,40" class="f-blue" fill-opacity="0.16" stroke="none"/><rect x="60" y="40" width="190" height="190" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="60" y1="230" x2="290" y2="230" stroke="currentColor" stroke-width="1.4"/><line x1="60" y1="230" x2="60" y2="10" stroke="currentColor" stroke-width="1.4"/><text x="296" y="235" font-size="15" font-style="italic">x</text><text x="56" y="4" font-size="15" font-style="italic" text-anchor="middle">y</text><line x1="250" y1="230" x2="60" y2="40" class="s-blue" stroke-width="2"/><rect x="126.5" y="106.5" width="9.5" height="123.5" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.2"/><text x="250" y="250" text-anchor="middle" font-size="13">1</text><text x="50" y="45" text-anchor="end" font-size="13">1</text><text x="50" y="246" text-anchor="end" font-size="13">0</text><text x="131.25" y="250" text-anchor="middle" font-size="13" class="t-orange">x</text><text x="144.0" y="224" font-size="12" class="t-orange">y = 0</text><text x="144.0" y="110.5" font-size="12" class="t-orange">y = 1 − x</text><text x="177.8" y="135.0" font-size="13" class="t-blue">x + y = 1</text><text x="82.8" y="207.2" font-size="13" class="t-blue">A</text><text x="320" y="60" font-size="13" class="t-orange">inner integral:</text><text x="320" y="80" font-size="13" class="t-orange">y from 0 to 1 − x</text><text x="320" y="100" font-size="13" class="t-orange">(x held fixed)</text><text x="320" y="120" font-size="13"></text><text x="320" y="140" font-size="13">outer integral:</text><text x="320" y="160" font-size="13">x from 0 to 1</text></svg>',
          alt: 'The unit square with the triangle below the line x + y = 1 shaded blue and labeled A. A thin orange vertical strip at position x runs from y = 0 up to the line y = 1 − x. Text at right: inner integral, y from 0 to 1 − x (x held fixed); outer integral, x from 0 to 1.',
          caption: 'The region $A = \\{x + y \\le 1\\}$ inside the unit square. For each fixed $x$, the strip runs from $y = 0$ up to the line $y = 1 - x$: those are the inner limits. The strips themselves sweep $x$ from $0$ to $1$.',
          maxWidth: 470,
        },
        {
          type: 'derivation',
          title: 'Density $f(x, y) = x + y$ on the unit square: find $P(X + Y \\le 1)$',
          steps: [
            { tex: '\\int_0^1 \\!\\! \\int_0^1 (x + y)\\,dy\\,dx = \\int_0^1 \\left(x + \\tfrac{1}{2}\\right) dx = \\tfrac{1}{2} + \\tfrac{1}{2} = 1', why: 'First check it is a valid density: it is $\\ge 0$ on the square, and the total volume is $1$. Inner integral: $\\int_0^1 (x + y)\\,dy = x + \\frac{1}{2}$ with $x$ constant.' },
            { tex: 'P(X + Y \\le 1) = \\int_0^1 \\!\\! \\int_0^{1-x} (x + y)\\,dy\\,dx', why: 'The region from the figure: outer $x$ from $0$ to $1$, inner $y$ from $0$ to $1 - x$.' },
            { tex: '\\int_0^{1-x} (x + y)\\,dy = \\Big[xy + \\tfrac{y^2}{2}\\Big]_{y=0}^{1-x} = x(1 - x) + \\tfrac{(1-x)^2}{2} = \\tfrac{1 - x^2}{2}', why: 'Inner integral, treating $x$ as a constant. Simplify: $(1 - x)\\left(x + \\frac{1 - x}{2}\\right) = \\frac{(1 - x)(1 + x)}{2}$.' },
            { tex: '\\int_0^1 \\tfrac{1 - x^2}{2}\\,dx = \\tfrac{1}{2}\\left(1 - \\tfrac{1}{3}\\right) = \\tfrac{1}{3}', why: 'Outer integral of the slice areas — an ordinary one-variable integral.' },
          ],
          result: '$P(X + Y \\le 1) = \\frac{1}{3}$. The triangle is half of the square\'s area, but it gets only a third of the probability: the density $x + y$ is small near the origin, where the triangle sits.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A joint density has the form $f(x, y) = c\\,xy$ on the triangle $0 \\le y \\le x \\le 1$ (and $0$ elsewhere). Find the constant $c$ that makes it a valid density.',
      hint: 'Total volume must be $1$. For fixed $x$, $y$ runs from $0$ to $x$; then $x$ runs from $0$ to $1$.',
      label: '$c =$',
      answer: '8',
      explanation: 'Integrate over the triangle: $\\int_0^1 \\int_0^x xy\\,dy\\,dx = \\int_0^1 x \\cdot \\frac{x^2}{2}\\,dx = \\frac{1}{2} \\cdot \\frac{1}{4} = \\frac{1}{8}$. For the total to be $1$ we need $c \\cdot \\frac{1}{8} = 1$, so $c = 8$. If you integrated $y$ from $0$ to $1$ you got $c = 4$ — that integrates over the whole square, not the triangle. The inner limits must come from the region.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Marginal and conditional densities',
      blocks: [
        {
          type: 'p',
          text: 'Everything from the table carries over with sums replaced by integrals. To get the density of $X$ alone, integrate out $y$; to condition on $X = x$, take the slice of the surface at that $x$ and rescale it to have area $1$.',
        },
        {
          type: 'theorem',
          name: 'Marginal and conditional densities',
          tex: 'f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y)\\,dy, \\qquad f_{Y \\mid X}(y \\mid x) = \\frac{f_{X,Y}(x, y)}{f_X(x)} \\quad (f_X(x) > 0)',
          text: 'and $E[Y \\mid X = x] = \\int y\\,f_{Y \\mid X}(y \\mid x)\\,dy$. In practice the integral runs only over the $y$-values where $f$ is nonzero **for that $x$**.',
        },
        {
          type: 'derivation',
          title: 'Back to $f(x, y) = x + y$ on the unit square',
          steps: [
            { tex: 'f_X(x) = \\int_0^1 (x + y)\\,dy = x + \\tfrac{1}{2}, \\quad 0 \\le x \\le 1', why: 'Integrate out $y$ over the slice at $x$, which is the whole interval $[0, 1]$ because the support is a square. By symmetry $f_Y(y) = y + \\frac{1}{2}$.' },
            { tex: 'f_{Y\\mid X}(y \\mid x) = \\frac{x + y}{x + \\frac{1}{2}}, \\quad 0 \\le y \\le 1', why: 'The slice at $x$, divided by its area $f_X(x)$.' },
            { tex: 'E[Y \\mid X = x] = \\frac{\\int_0^1 y(x + y)\\,dy}{x + \\frac{1}{2}} = \\frac{\\frac{x}{2} + \\frac{1}{3}}{x + \\frac{1}{2}}', why: '$\\int_0^1 (xy + y^2)\\,dy = \\frac{x}{2} + \\frac{1}{3}$.' },
          ],
          result: '$E[Y \\mid X = 0] = \\frac{2}{3}$ and $E[Y \\mid X = 1] = \\frac{5}{9}$: the larger $X$ is, the smaller $Y$ tends to be. Drag the slider below to watch the slice tilt.',
        },
        {
          type: 'graph',
          x: [-0.1, 1.1],
          y: [0, 2.1],
          xStep: 0.25,
          yStep: 0.5,
          height: 260,
          functions: [
            { expr: '(a + x)/(a + 0.5)', domain: [0, 1], color: 'blue', label: 'conditional density $f_{Y\\mid X}(y \\mid a)$' },
            { expr: 'x + 0.5', domain: [0, 1], color: 'gray', dashed: true, label: 'marginal density $f_Y(y) = y + \\frac{1}{2}$' },
          ],
          areas: [{ expr: '(a + x)/(a + 0.5)', from: 0, to: 1, color: 'blue' }],
          vlines: [{ x: '(a/2 + 1/3)/(a + 0.5)', label: 'E[Y | X = a]', color: 'orange' }],
          sliders: [{ name: 'a', min: 0, max: 1, step: 0.01, value: 0.2, label: 'condition on $X = a$' }],
          readouts: [
            { label: '$f_X(a) = a + \\frac{1}{2} =$', expr: 'a + 0.5', digits: 3 },
            { label: '$E[Y \\mid X = a] =$', expr: '(a/2 + 1/3)/(a + 0.5)', digits: 4 },
          ],
          caption: 'Here the horizontal axis is $y$. The blue curve is the slice of $f(x, y) = x + y$ at $x = a$, rescaled to area $1$. At $a = 0$ it is the line $2y$, heavily tilted toward large $y$; as $a$ grows it flattens, so the conditional mean (orange) slides left. The dashed curve ignores $X$ entirely.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 470 250" xmlns="http://www.w3.org/2000/svg"><polygon points="40,195 200,195 200,35" class="f-blue" fill-opacity="0.16" stroke="none"/><line x1="40" y1="195" x2="200" y2="35" class="s-blue" stroke-width="2"/><line x1="200" y1="35" x2="200" y2="195" class="s-blue" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="40" y1="195" x2="225" y2="195" stroke="currentColor" stroke-width="1.4"/><line x1="40" y1="195" x2="40" y2="13" stroke="currentColor" stroke-width="1.4"/><text x="230" y="200" font-size="14" font-style="italic">x</text><text x="40" y="7" font-size="14" font-style="italic" text-anchor="middle">y</text><text x="200" y="213" text-anchor="middle" font-size="12">1</text><text x="32" y="39" text-anchor="end" font-size="12">1</text><text x="107.2" y="99.0" font-size="12" class="t-blue" text-anchor="end">y = x</text><rect x="136.0" y="99.0" width="8.0" height="96.0" class="f-orange s-orange" fill-opacity="0.35" stroke-width="1.2"/><text x="140.0" y="213" text-anchor="middle" font-size="12" class="t-orange">x</text><text x="120.0" y="237" text-anchor="middle" font-size="13">fixed x: y runs from 0 to x</text><polygon points="270,195 430,195 430,35" class="f-blue" fill-opacity="0.16" stroke="none"/><line x1="270" y1="195" x2="430" y2="35" class="s-blue" stroke-width="2"/><line x1="430" y1="35" x2="430" y2="195" class="s-blue" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="270" y1="195" x2="455" y2="195" stroke="currentColor" stroke-width="1.4"/><line x1="270" y1="195" x2="270" y2="13" stroke="currentColor" stroke-width="1.4"/><text x="460" y="200" font-size="14" font-style="italic">x</text><text x="270" y="7" font-size="14" font-style="italic" text-anchor="middle">y</text><text x="430" y="213" text-anchor="middle" font-size="12">1</text><text x="262" y="39" text-anchor="end" font-size="12">1</text><text x="337.2" y="99.0" font-size="12" class="t-blue" text-anchor="end">y = x</text><rect x="326.0" y="131.0" width="104.0" height="8.0" class="f-green s-green" fill-opacity="0.35" stroke-width="1.2"/><text x="262" y="139.0" text-anchor="end" font-size="12" class="t-green">y</text><text x="350.0" y="237" text-anchor="middle" font-size="13">fixed y: x runs from y to 1</text></svg>',
          alt: 'Two copies of the triangle 0 ≤ y ≤ x ≤ 1, bounded by the x-axis, the line y = x and the line x = 1. Left: an orange vertical strip at x running from the x-axis up to the line y = x, labeled "fixed x: y runs from 0 to x". Right: a green horizontal strip at height y running from the line y = x to x = 1, labeled "fixed y: x runs from y to 1".',
          caption: 'When the support is not a rectangle, the limits of the inner integral depend on where you slice. On the triangle $0 \\le y \\le x \\le 1$: $f_X(x) = \\int_0^x f\\,dy$ but $f_Y(y) = \\int_y^1 f\\,dx$.',
          maxWidth: 470,
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'For the density $f(x, y) = 8xy$ on the triangle $0 \\le y \\le x \\le 1$, find the marginal density $f_X(x)$ for $0 \\le x \\le 1$.',
      hint: 'For a fixed $x$, which $y$-values are in the triangle? Integrate $8xy$ over those, treating $x$ as a constant.',
      label: '$f_X(x) =$',
      answer: '4x^3',
      domain: [0, 1],
      answerTex: '4x^3',
      explanation: 'For fixed $x$, the triangle allows $0 \\le y \\le x$, so $f_X(x) = \\int_0^x 8xy\\,dy = 8x \\cdot \\frac{x^2}{2} = 4x^3$. Check: $\\int_0^1 4x^3\\,dx = 1$, as a density must. Integrating $y$ from $0$ to $1$ would give $4x$, which also integrates to $2$, not $1$ — a sign the limits were wrong.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Independent random variables: factorization',
      blocks: [
        {
          type: 'p',
          text: 'Two random variables are independent when knowing one tells you nothing about the other: every event about $X$ is independent (in the sense of [[dm-independent-events|independent events]]) of every event about $Y$. For distributions this becomes a product rule.',
        },
        {
          type: 'definition',
          term: 'Independence of random variables',
          text: '$X$ and $Y$ are [[stat-independent-random-variables|independent]] if $p_{X,Y}(x, y) = p_X(x)\\,p_Y(y)$ for **all** $x, y$ (discrete), or $f_{X,Y}(x, y) = f_X(x)\\,f_Y(y)$ for all $x, y$ (continuous). Equivalently, every conditional distribution of $Y$ given $X = x$ equals the marginal of $Y$.',
        },
        {
          type: 'p',
          text: 'The kills/deaths table fails at the very first cell: $p(0, 0) = 0.10$ but $p_X(0)\\,p_Y(0) = 0.35 \\times 0.40 = 0.14$. One failing cell is enough. For densities there is a fast test that avoids computing marginals:',
        },
        {
          type: 'theorem',
          name: 'Factorization criterion',
          text: '$X$ and $Y$ are independent if and only if the joint density (or PMF) can be written as $f(x, y) = g(x)\\,h(y)$ for **all** $x, y$, for some functions $g$ and $h$. In particular the set where $f > 0$ must be a "rectangle" $\\{x \\in I\\} \\times \\{y \\in J\\}$ (intervals may be infinite).',
        },
        {
          type: 'list',
          items: [
            '$f(x, y) = 6e^{-2x - 3y}$ for $x, y > 0$: equals $2e^{-2x} \\cdot 3e^{-3y}$ on the product region $(0, \\infty)^2$. **Independent**: $X \\sim \\text{Exp}(2)$ and $Y \\sim \\text{Exp}(3)$, both [[stat-exponential-distribution|exponential]].',
            '$f(x, y) = x + y$ on the unit square: a sum does not split into $g(x)h(y)$. **Dependent** — the tilting slice in the graph above showed it.',
            '$f(x, y) = 8xy$ on $0 \\le y \\le x \\le 1$: the formula looks like $8x \\cdot y$, but the support is a triangle. Written for all $x, y$ it is $8xy \\cdot \\mathbf{1}[y \\le x]$, and the indicator ties them together. **Dependent**: learning $X = 0.3$ forces $Y \\le 0.3$.',
          ],
        },
        {
          type: 'derivation',
          title: 'Which of two independent timers fires first?',
          steps: [
            { tex: 'X \\sim \\text{Exp}(2),\\ Y \\sim \\text{Exp}(3) \\text{ independent:}\\ f(x, y) = 6e^{-2x}e^{-3y},\\ x, y > 0', why: 'Two components fail at random times; rates $2$ and $3$ per $1000$ hours (rate convention: $\\text{Exp}(\\lambda)$ has density $\\lambda e^{-\\lambda x}$ and mean $1/\\lambda$). Independence lets us multiply the densities.' },
            { tex: 'P(X < Y) = \\int_0^\\infty \\!\\! \\int_x^\\infty 6e^{-2x}e^{-3y}\\,dy\\,dx', why: 'The region $\\{y > x\\}$: for fixed $x$, $y$ runs from $x$ to $\\infty$ — an [[improper-integral|improper integral]].' },
            { tex: '\\int_x^\\infty 3e^{-3y}\\,dy = e^{-3x}', why: 'Inner integral: $\\big[-e^{-3y}\\big]_x^\\infty = 0 - (-e^{-3x})$. It is $P(Y > x)$, as it should be.' },
            { tex: 'P(X < Y) = \\int_0^\\infty 2e^{-2x}e^{-3x}\\,dx = \\frac{2}{5}', why: '$\\int_0^\\infty 2e^{-5x}\\,dx = \\frac{2}{5}$.' },
          ],
          result: 'Component $A$ (rate $2$) fails first with probability $\\frac{2}{2+3} = 0.4$. In general $P(X < Y) = \\frac{\\lambda_1}{\\lambda_1 + \\lambda_2}$ for independent exponentials: the faster rate wins proportionally more often. Game engines use the same fact for competing random timers (which buff expires first, which spawner fires first).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Which joint density describes **independent** random variables $X$ and $Y$? (Each is $0$ outside the stated region.)',
      options: [
        { text: '$f(x, y) = 2$ on the triangle $0 \\le y \\le x \\le 1$', why: 'The formula is constant, but the support is a triangle, not a rectangle: knowing $X = 0.2$ forces $Y \\le 0.2$. Dependent.' },
        { text: '$f(x, y) = \\frac{3}{2}(x^2 + y^2)$ on the unit square', why: 'A sum $x^2 + y^2$ cannot be written as $g(x)h(y)$. Dependent, even though the support is a square.' },
        { text: '$f(x, y) = 4xy$ on the unit square $0 \\le x, y \\le 1$', correct: true, why: '$4xy = 2x \\cdot 2y$ on a product region, so $f = f_X f_Y$ with $f_X(x) = 2x$ and $f_Y(y) = 2y$. Independent.' },
        { text: '$f(x, y) = \\frac{1}{\\pi}$ on the unit disk $x^2 + y^2 \\le 1$', why: 'Uniform on a disk: if $X$ is near $\\pm 1$, then $Y$ must be near $0$. The support is not a rectangle, so they are dependent.' },
      ],
      explanation: 'Use the factorization criterion: $f(x, y) = g(x)h(y)$ for all $x, y$, which includes the region where $f = 0$. Only $4xy$ on the square passes: $4xy = (2x)(2y)$ and the square is a product of intervals. A constant or product-looking formula on a triangle or disk fails, because the support itself links the variables.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Checking joint-distribution answers by simulation',
      blocks: [
        {
          type: 'p',
          text: 'Double integrals are easy to set up wrong (limits!), so it pays to check them by simulation. Two techniques cover most cases. For **independent** variables, sample each one separately — here by [[stat-inverse-transform-sampling|inverse transform]], $-\\ln(1 - U)/\\lambda \\sim \\text{Exp}(\\lambda)$. For a **dependent** joint density, use [[stat-rejection-sampling|rejection sampling]]: throw uniform points into a box around the surface and keep those that land under it.',
        },
        {
          type: 'code',
          title: 'joint_check.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

std::mt19937_64 rng(2024);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }      // uniform in [0, 1)

// Inverse transform: if U ~ U(0,1) then -ln(1 - U)/rate ~ Exp(rate).
double exponential(double rate) { return -std::log(1.0 - uniform01()) / rate; }

int main() {
    const int N = 1'000'000;

    // 1) Independent timers X ~ Exp(2), Y ~ Exp(3): how often does X fire first?
    int xFirst = 0;
    for (int i = 0; i < N; ++i)
        if (exponential(2.0) < exponential(3.0)) ++xFirst;
    std::printf("P(X < Y)     ~ %.4f   (exact 2/5 = 0.4000)\\n", double(xFirst) / N);

    // 2) Joint density f(x,y) = x + y on the unit square, sampled by rejection:
    //    propose (x, y) uniform in the square and h uniform in [0, 2] (f <= 2);
    //    keep the point when h falls under the surface, h < f(x, y).
    int kept = 0, below = 0;
    while (kept < N) {
        double x = uniform01(), y = uniform01(), h = 2.0 * uniform01();
        if (h >= x + y) continue;          // rejected: above the surface
        ++kept;
        if (x + y <= 1.0) ++below;
    }
    std::printf("P(X + Y <= 1) ~ %.4f   (exact 1/3 = 0.3333)\\n", double(below) / N);
}`,
          output: `P(X < Y)     ~ 0.4003   (exact 2/5 = 0.4000)
P(X + Y <= 1) ~ 0.3330   (exact 1/3 = 0.3333)`,
          annotations: [
            { lines: 6, text: 'The top $53$ bits of a 64-bit random integer, scaled by $2^{-53}$: a uniform double in $[0, 1)$, identical on every compiler.' },
            { lines: 9, text: 'Inverse-transform sampling: solve $u = F(x) = 1 - e^{-\\lambda x}$ for $x$. Using $1 - U$ avoids $\\ln 0$.' },
            { lines: '16-17', text: 'Because the timers are independent, two separate draws give a draw from the joint density $6e^{-2x - 3y}$.' },
            { lines: '23-28', text: 'Rejection sampling: a point $(x, y, h)$ uniform in the box $[0,1]^2 \\times [0, 2]$ is kept with probability proportional to $f(x, y)$, so kept $(x, y)$ pairs have density exactly $x + y$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How close should a simulation be?',
          text: 'An estimated probability from $N$ independent trials has standard deviation $\\sqrt{p(1 - p)/N}$ — for $p = 0.4$ and $N = 10^6$, about $0.0005$. Both estimates above are within one such unit of the exact answers. If a simulation disagrees with your integral by many of these units, suspect the integral\'s limits first. (Why the error shrinks like $1/\\sqrt{N}$ is the subject of the next unit.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student finds the marginal density of $Y$ for $f(x, y) = 8xy$ on the triangle $0 \\le y \\le x \\le 1$. Tap the first wrong line.',
      lines: [
        'To get $f_Y(y)$, integrate out $x$ with $y$ held fixed.',
        'For fixed $y$, the triangle allows $0 \\le x \\le 1$.',
        '$f_Y(y) = \\int_0^1 8xy\\,dx = 8y \\cdot \\frac{1}{2} = 4y$.',
        'So $f_Y(y) = 4y$ on $[0, 1]$.',
      ],
      errorLines: [2],
      explanation: 'For a fixed $y$, the point $(x, y)$ is in the triangle only when $y \\le x \\le 1$ (the horizontal strip starts at the line $y = x$). The correct marginal is $f_Y(y) = \\int_y^1 8xy\\,dx = 4y(1 - y^2)$ for $0 \\le y \\le 1$, which integrates to $2 - 1 = 1$. The student\'s $4y$ integrates to $2$ — impossible for a density, and a quick way to catch the mistake.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for computing $P\\big((X, Y) \\in A\\big)$ from a joint density in order.',
      lines: [
        'Sketch the region $A$ together with the support of $f$.',
        'Choose the order of integration (vertical or horizontal strips).',
        'Read the inner limits off a strip: they may depend on the outer variable.',
        'Integrate the inner integral, holding the outer variable constant.',
        'Integrate the result over the outer variable\'s range.',
      ],
      explanation: 'The sketch comes first because every limit is read from it: the region where the event happens **and** $f > 0$. Then pick the slicing direction that makes the limits simplest, write the inner limits as functions of the outer variable, and evaluate inside-out. The final answer must lie in $[0, 1]$ — a free sanity check.',
    },
  ],
  takeaways: [
    'A joint PMF is a table $p(x, y) = P(X = x, Y = y)$; a joint density is a surface, and $P((X, Y) \\in A) = \\iint_A f\\,dA$ is a volume.',
    'Double integrals are iterated integrals: integrate the inner variable with the outer one held fixed, using limits read from a sketch of the region.',
    'Marginals sum or integrate out the other variable; they lose information, so they do not determine the joint distribution.',
    'Conditional distributions slice and rescale: $p_{Y\\mid X}(y \\mid x) = p(x, y)/p_X(x)$, and $E[Y] = \\sum_x E[Y \\mid X = x]\\,p_X(x)$.',
    'Independence means $f(x, y) = f_X(x) f_Y(y)$ everywhere; by factorization, check that $f = g(x)h(y)$ **and** that the support is a rectangle.',
    'For independent exponential timers, $P(X < Y) = \\frac{\\lambda_1}{\\lambda_1 + \\lambda_2}$.',
  ],
  reading: [
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The class notes on joint distributions work through tables, joint densities and independence with many short exercises.',
    },
    {
      title: 'Wikipedia — Joint probability distribution',
      url: 'https://en.wikipedia.org/wiki/Joint_probability_distribution',
      source: 'wikipedia',
      note: 'Definitions of joint PMFs, densities and CDFs, with the marginal and conditional formulas side by side.',
    },
    {
      title: 'Wikipedia — Marginal distribution',
      url: 'https://en.wikipedia.org/wiki/Marginal_distribution',
      source: 'wikipedia',
      note: 'Shows a worked contingency table and explains why the sums in the margins gave the concept its name.',
    },
    {
      title: 'Seeing Theory (Brown University)',
      url: 'https://seeing-theory.brown.edu/',
      source: 'other',
      note: 'Interactive visual chapters on probability distributions; the "Probability Distributions" chapter lets you play with random variables and their densities.',
    },
  ],
};
