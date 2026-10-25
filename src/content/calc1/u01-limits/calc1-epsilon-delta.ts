import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-epsilon-delta',
  title: 'The Precise Definition of a Limit',
  summary: 'Turn "gets arbitrarily close" into a precise challenge-and-response game with ε and δ, and write your first real limit proofs.',
  minutes: 19,
  objectives: [
    'State the ε-δ definition of a limit and explain the role of every symbol in it',
    'Translate $0 < |x - a| < \\delta$ and $|f(x) - L| < \\varepsilon$ into intervals and bands on a graph',
    'Find a $\\delta$ that works for a given numerical $\\varepsilon$',
    'Write complete ε-δ proofs for linear functions and for $\\lim_{x \\to 2} x^2 = 4$',
    'Use the definition to show that a limit does not exist',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What does "arbitrarily close" really mean?',
      blocks: [
        {
          type: 'p',
          text: 'Throughout this unit we have said things like "$f(x)$ gets as close to $L$ as we like when $x$ is close enough to $a$". That captures the intuition, but every key word is vague. *How* close is "close enough"? Who decides "as close as we like"? Vague definitions cannot support proofs, and calculus needs proofs: the limit laws, the Squeeze Theorem and every derivative rule rest on them.',
        },
        {
          type: 'p',
          text: 'The precise version is best understood as a **game between two players**:',
        },
        {
          type: 'steps',
          items: [
            { title: 'The challenger picks a tolerance $\\varepsilon > 0$', text: '"I want $f(x)$ to be within $\\varepsilon$ of $L$." The challenger can be as demanding as they like: $0.1$, $0.0001$, $10^{-100}$.' },
            { title: 'You respond with a distance $\\delta > 0$', text: '"Then keep $x$ within $\\delta$ of $a$ (but not equal to $a$)." Your $\\delta$ may depend on the $\\varepsilon$ you were given.' },
            { title: 'You win the round if the promise holds', text: 'Every $x$ in your $\\delta$-window must produce an $f(x)$ inside the challenger\'s $\\varepsilon$-tolerance. No exceptions.' },
          ],
        },
        {
          type: 'p',
          text: '$\\lim_{x \\to a} f(x) = L$ means **you can win every round** — no matter which $\\varepsilon > 0$ the challenger chooses, you always have a winning $\\delta$. The symbols are the Greek letters epsilon ($\\varepsilon$, think "error") and delta ($\\delta$, think "distance").',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Machining tolerance',
          text: 'A customer orders a $10\\text{ mm}$ shaft "to within $\\pm 0.01\\text{ mm}$" (that is $\\varepsilon$). The machinist answers: "then I must hold the cutting tool within $\\pm 0.002\\text{ mm}$ of its target" (that is $\\delta$). A limit says *every* such order can be filled, however strict the tolerance.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Newton and Leibniz built calculus on "infinitely small" quantities that nobody could define; Bishop Berkeley mocked them in 1734 as "the ghosts of departed quantities". The repair took over a century: Bolzano and Cauchy (1810s–1820s) phrased limits in terms of inequalities, and Weierstrass (1860s) gave the exact ε-δ form used today.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which inequality says "$x$ is within $0.1$ of $3$, but $x \\ne 3$"?',
      options: [
        {
          text: '$|x - 3| < 0.1$',
          why: 'This allows $x = 3$ (then $|x - 3| = 0 < 0.1$). It describes the whole interval $(2.9, 3.1)$, centre included.',
        },
        {
          text: '$0 < |x - 3| < 0.1$',
          correct: true,
          why: '$|x - 3|$ is the distance from $x$ to $3$. Requiring it to be less than $0.1$ keeps $x$ in $(2.9, 3.1)$, and requiring it to be greater than $0$ removes $x = 3$ itself.',
        },
        {
          text: '$0 < |x + 3| < 0.1$',
          why: '$|x + 3| = |x - (-3)|$ is the distance from $x$ to $-3$, not to $3$.',
        },
        {
          text: '$|x - 0.1| < 3$',
          why: 'The roles are swapped: this says $x$ is within $3$ of $0.1$, the interval $(-2.9, 3.1)$.',
        },
      ],
      explanation: 'Distances are absolute values of differences: "the distance from $x$ to $a$" is $|x - a|$. So "within $\\delta$ of $a$" is $|x - a| < \\delta$, i.e. $a - \\delta < x < a + \\delta$, and adding $0 < |x - a|$ punches out the centre. That punctured interval is exactly the set of inputs the limit definition looks at.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The ε-δ definition',
      blocks: [
        {
          type: 'definition',
          term: 'Precise definition of a limit',
          text: 'Let $f$ be defined on an open interval containing $a$, except possibly at $a$. Then $\\lim\\limits_{x \\to a} f(x) = L$ means:\n\nfor every $\\varepsilon > 0$ there is a $\\delta > 0$ such that\n\n$$\\text{if } 0 < |x - a| < \\delta, \\text{ then } |f(x) - L| < \\varepsilon.$$',
        },
        {
          type: 'table',
          headers: ['Piece', 'Meaning', 'On the graph'],
          rows: [
            ['for every $\\varepsilon > 0$', 'no matter how strict the output tolerance', 'any horizontal band, however thin'],
            ['there is a $\\delta > 0$', 'some input distance works (it may depend on $\\varepsilon$)', 'a vertical strip around $x = a$'],
            ['$0 < |x - a| < \\delta$', '$x$ within $\\delta$ of $a$, but $x \\ne a$', 'inside the strip, centre line removed'],
            ['$|f(x) - L| < \\varepsilon$', '$L - \\varepsilon < f(x) < L + \\varepsilon$', 'the graph lies inside the band'],
          ],
        },
        {
          type: 'p',
          text: 'Geometrically: around the height $L$ draw a horizontal band of half-width $\\varepsilon$. You must find a vertical strip of half-width $\\delta$ around $a$ so that the part of the graph inside the strip (ignoring $x = a$) stays inside the band. Try it for $f(x) = x^2$, $a = 2$, $L = 4$:',
        },
        {
          type: 'graph',
          x: [0.5, 3.5],
          y: [0, 9.5],
          height: 340,
          areas: [
            { expr: '4 + u', expr2: '4 - u', from: 0.5, to: 3.5, color: 'green' },
            { expr: '9.5', expr2: '0', from: '2 - d', to: '2 + d', color: 'blue' },
          ],
          functions: [
            { expr: 'x^2', label: '$y = x^2$', color: 'gray' },
            { expr: 'x^2', label: 'graph inside the strip', color: 'red', domain: ['2 - d', '2 + d'] },
          ],
          hlines: [
            { y: '4 + u', label: 'L + ε', color: 'green' },
            { y: '4 - u', label: 'L − ε', color: 'green' },
          ],
          vlines: [
            { x: '2 - d', color: 'blue' },
            { x: '2 + d', color: 'blue' },
          ],
          points: [{ x: 2, y: 4, label: '(2, 4)', open: true }],
          sliders: [
            { name: 'u', min: 0.1, max: 3, step: 0.05, value: 1.5, label: '$\\varepsilon$ (band half-width)' },
            { name: 'd', min: 0.02, max: 1.2, step: 0.01, value: 0.6, label: '$\\delta$ (strip half-width)' },
          ],
          readouts: [
            { label: 'worst $|x^2 - 4|$ in strip $= 4\\delta + \\delta^2 =$', expr: '4d + d^2', digits: 4 },
            { label: '$\\varepsilon - (4\\delta + \\delta^2) =$', expr: 'u - 4d - d^2', digits: 4 },
            { label: 'largest $\\delta$ that works $= \\sqrt{4 + \\varepsilon} - 2 =$', expr: 'sqrt(4 + u) - 2', digits: 4 },
          ],
          caption: 'The red piece is the graph over the blue strip. The $\\delta$ wins when the red piece stays inside the green band, which happens exactly when the second readout is $\\ge 0$. Start with $\\varepsilon = 1.5$, $\\delta = 0.6$ (a loss), shrink $\\delta$ until you win, then shrink $\\varepsilon$ and win again.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why each part is there',
          text: '**"For every $\\varepsilon$"** is what makes it a limit rather than an approximation: winning for $\\varepsilon = 0.1$ alone would only show $f(x)$ stays within $0.1$ of $L$. **"$0 < |x - a|$"** excludes $x = a$, because a limit is about what happens *near* $a$ — the value $f(a)$, or whether it even exists, is irrelevant (remember holes). **"There is a $\\delta$"** only asks for one strip that works; you never have to find the best one.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the precise definition of $\\lim\\limits_{x \\to a} f(x) = L$.',
      template: 'For every ___ there is a ___ such that if $0 < |x - a| <$ ___, then $|f(x) - L| <$ ___.',
      blanks: [{ answers: ['$\\varepsilon > 0$'] }, { answers: ['$\\delta > 0$'] }, { answers: ['$\\delta$'] }, { answers: ['$\\varepsilon$'] }],
      wordBank: ['$\\varepsilon > 0$', '$\\delta > 0$', '$\\delta$', '$\\varepsilon$', '$x > 0$', '$L$'],
      explanation: 'The order of the quantifiers matters: the challenger chooses $\\varepsilon$ **first**, and then you find $\\delta$ (which may depend on $\\varepsilon$). The $\\delta$ controls the *input* distance $|x - a|$; the $\\varepsilon$ controls the *output* distance $|f(x) - L|$. Swapping them ("there is a $\\delta$ that works for every $\\varepsilon$") would demand a single strip that beats every band, which would force $f$ to be exactly $L$ near $a$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Finding δ for a specific ε',
      blocks: [
        {
          type: 'p',
          text: 'Before writing full proofs, play a few rounds with actual numbers. The method is always: start from the inequality you **want**, $|f(x) - L| < \\varepsilon$, and rewrite it until it reads "$|x - a| < \\text{something}$". That something is a $\\delta$ that works.',
        },
        {
          type: 'derivation',
          title: 'For $\\lim_{x \\to 3}(2x + 1) = 7$ and $\\varepsilon = 0.1$, find $\\delta$',
          steps: [
            { tex: '|(2x + 1) - 7| < 0.1', why: 'This is the goal: the output within $\\varepsilon = 0.1$ of $L = 7$.' },
            { tex: '\\iff |2x - 6| < 0.1', why: 'Simplify inside the absolute value.' },
            { tex: '\\iff 2|x - 3| < 0.1', why: 'Factor out $2$: $|2x - 6| = |2(x - 3)| = 2|x - 3|$. Aim for the form $|x - a|$ with $a = 3$.' },
            { tex: '\\iff |x - 3| < 0.05', why: 'Divide by $2$. Every step was reversible, so these inequalities say the same thing.' },
          ],
          result: '$\\delta = 0.05$ works: whenever $x$ is within $0.05$ of $3$, $2x + 1$ is within $0.1$ of $7$. The output moves twice as fast as the input, so the input tolerance is half the output tolerance.',
        },
        {
          type: 'p',
          text: 'For non-linear functions the band is not hit symmetrically, so check both sides and **take the smaller distance**. Look at $f(x) = x^2$ near $a = 2$ with $\\varepsilon = 0.41$:',
        },
        {
          type: 'derivation',
          title: 'For $\\lim_{x \\to 2} x^2 = 4$ and $\\varepsilon = 0.41$, find the largest $\\delta$',
          steps: [
            { tex: '4 - 0.41 < x^2 < 4 + 0.41 \\iff 3.59 < x^2 < 4.41', why: '$|x^2 - 4| < 0.41$ written as a double inequality.' },
            { tex: '\\sqrt{3.59} < x < \\sqrt{4.41} \\iff 1.8947\\ldots < x < 2.1', why: 'Take square roots; we only care about $x$ near $2$, so $x > 0$.' },
            { tex: '\\text{left gap: } 2 - 1.8947\\ldots \\approx 0.1053, \\quad \\text{right gap: } 2.1 - 2 = 0.1', why: 'How far can $x$ move from $2$ in each direction before $x^2$ leaves the band?' },
            { tex: '\\delta = \\min(0.1053\\ldots,\\ 0.1) = 0.1', why: 'The strip must be symmetric, so it is limited by the closer side. On the right the parabola is steeper, so it escapes sooner.' },
          ],
          result: 'The largest $\\delta$ is $0.1$. Any smaller positive $\\delta$, such as $0.05$, also works.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Smaller is always safe',
          text: 'If $\\delta$ wins a round, every smaller positive $\\delta$ wins too: a narrower strip contains only points the wider one already handled. So you never need the *best* $\\delta$. In proofs we happily choose a $\\delta$ smaller than necessary if it makes the algebra easier.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'For $\\lim\\limits_{x \\to 1}(3x - 2) = 1$ and the tolerance $\\varepsilon = 0.06$, what is the **largest** $\\delta$ that works?',
      hint: 'Rewrite $|(3x - 2) - 1| < 0.06$ until it reads $|x - 1| < \\text{something}$.',
      label: '$\\delta =$',
      answer: '0.02',
      explanation: '$|(3x - 2) - 1| = |3x - 3| = 3|x - 1|$, so $|f(x) - 1| < 0.06 \\iff 3|x - 1| < 0.06 \\iff |x - 1| < 0.02$. The slope $3$ triples input errors, so the input tolerance must be a third of the output tolerance: $\\delta = \\frac{0.06}{3} = 0.02$.',
    },
    {
      kind: 'truefalse',
      prompt: 'If $\\delta = 0.05$ works for a given $\\varepsilon$, then $\\delta = 0.01$ also works for that same $\\varepsilon$.',
      answer: true,
      explanation: 'Every $x$ with $0 < |x - a| < 0.01$ also satisfies $0 < |x - a| < 0.05$, and for those $x$ we already know $|f(x) - L| < \\varepsilon$. Shrinking $\\delta$ only removes inputs, so it can never break the promise. (Shrinking $\\varepsilon$ is different: a stricter tolerance usually forces a smaller $\\delta$.)',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Your first proof: a linear function',
      blocks: [
        {
          type: 'p',
          text: 'A numerical round shows one $\\varepsilon$. A proof must win **every** round at once, so we keep $\\varepsilon$ as a letter and find $\\delta$ as a formula in $\\varepsilon$. Every ε-δ proof has two phases: **scratch work** (work backwards from the goal to discover $\\delta$) and the **written proof** (present it forwards, starting from the choice of $\\delta$).',
        },
        {
          type: 'derivation',
          title: 'Scratch work for $\\lim_{x \\to 3}(4x - 5) = 7$',
          steps: [
            { tex: '\\text{Want: } |(4x - 5) - 7| < \\varepsilon', why: 'Write down the goal with $f(x) = 4x - 5$, $L = 7$.' },
            { tex: '|4x - 12| < \\varepsilon', why: 'Simplify.' },
            { tex: '4|x - 3| < \\varepsilon', why: 'Factor so that $|x - a| = |x - 3|$ appears.' },
            { tex: '|x - 3| < \\frac{\\varepsilon}{4}', why: 'Solve for $|x - 3|$. This suggests $\\delta = \\frac{\\varepsilon}{4}$.' },
          ],
          result: 'Guess: $\\delta = \\frac{\\varepsilon}{4}$. Scratch work is *not* the proof; it only tells us what to choose.',
        },
        {
          type: 'derivation',
          title: 'Proof that $\\lim_{x \\to 3}(4x - 5) = 7$',
          steps: [
            { tex: '\\text{Let } \\varepsilon > 0. \\text{ Choose } \\delta = \\tfrac{\\varepsilon}{4}.', why: 'The challenger\'s $\\varepsilon$ is arbitrary, so the argument covers every round. Note $\\delta > 0$.' },
            { tex: '\\text{Suppose } 0 < |x - 3| < \\delta.', why: 'Take any $x$ in the punctured strip. We must show $f(x)$ is in the band.' },
            { tex: '|(4x - 5) - 7| = |4x - 12| = 4|x - 3|', why: 'Algebra, as in the scratch work.' },
            { tex: '< 4\\delta = 4 \\cdot \\tfrac{\\varepsilon}{4} = \\varepsilon', why: 'Use $|x - 3| < \\delta$, then substitute our choice of $\\delta$.' },
          ],
          result: 'So $|f(x) - 7| < \\varepsilon$ whenever $0 < |x - 3| < \\delta$. Since $\\varepsilon$ was arbitrary, $\\lim_{x \\to 3}(4x - 5) = 7$. $\\blacksquare$',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\delta = \\varepsilon / 4$: slope magnifies errors',
          text: 'A line of slope $m$ multiplies every input change by $m$: if $x$ moves by $\\Delta x$, then $mx + b$ moves by $|m|\\,\\Delta x$. To keep output errors under $\\varepsilon$, input errors must stay under $\\frac{\\varepsilon}{|m|}$. So for any line with $m \\ne 0$, $\\delta = \\frac{\\varepsilon}{|m|}$ proves $\\lim_{x \\to a}(mx + b) = ma + b$. (For $m = 0$ the function is constant and any $\\delta$ works.)',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'The proof template graders look for',
          text: '"Let $\\varepsilon > 0$. Choose $\\delta = \\ldots$. Suppose $0 < |x - a| < \\delta$. Then $|f(x) - L| = \\ldots < \\varepsilon$." Graders check that $\\delta$ is chosen **before** $x$ appears, that $\\delta$ depends only on $\\varepsilon$ (and constants), never on $x$, and that you never *assume* $|f(x) - L| < \\varepsilon$ — that is the conclusion.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Arrange the lines into a correct proof that $\\lim\\limits_{x \\to 2}(3x + 1) = 7$.',
      lines: [
        'Let $\\varepsilon > 0$ be given.',
        'Choose $\\delta = \\frac{\\varepsilon}{3}$.',
        'Suppose $0 < |x - 2| < \\delta$.',
        'Then $|(3x + 1) - 7| = |3x - 6| = 3|x - 2|$.',
        'So $3|x - 2| < 3\\delta = \\varepsilon$, as required.',
      ],
      distractors: ['Assume $|(3x + 1) - 7| < \\varepsilon$.'],
      explanation: 'The structure mirrors the definition: $\\varepsilon$ is given first, $\\delta$ is chosen in response, then an arbitrary $x$ in the strip is shown to land in the band. The distractor assumes what we are trying to prove — a circular argument and the most common way ε-δ proofs lose credit. The inequality $|(3x + 1) - 7| < \\varepsilon$ must be the **last** thing established, never an assumption.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'A quadratic proof: $\\lim_{x \\to 2} x^2 = 4$',
      blocks: [
        {
          type: 'p',
          text: 'For non-linear functions the "magnification factor" changes from point to point, so the scratch work has one extra idea. Factor first:',
        },
        { type: 'math', tex: '|x^2 - 4| = |x - 2|\\cdot|x + 2|' },
        {
          type: 'p',
          text: 'The factor $|x - 2|$ is what $\\delta$ controls. The factor $|x + 2|$ is the problem: it depends on $x$, and $\\delta$ is not allowed to. The trick is to **bound** it by agreeing in advance that $\\delta$ will be at most $1$. Then $x$ is trapped in $(1, 3)$, where $|x + 2|$ can be at most $5$.',
        },
        {
          type: 'derivation',
          title: 'Scratch work: find $\\delta$',
          steps: [
            { tex: '\\text{If } \\delta \\le 1: \\ |x - 2| < 1 \\implies 1 < x < 3', why: 'First restriction on $\\delta$. The choice $1$ is arbitrary; any fixed positive number works with a different bound below.' },
            { tex: '\\implies 3 < x + 2 < 5 \\implies |x + 2| < 5', why: 'Add $2$ to each part. Since $x + 2$ is between $3$ and $5$, its absolute value is less than $5$.' },
            { tex: '|x^2 - 4| = |x - 2|\\,|x + 2| < 5\\,|x - 2|', why: 'Replace the troublesome factor by its upper bound.' },
            { tex: '5\\,|x - 2| < \\varepsilon \\iff |x - 2| < \\tfrac{\\varepsilon}{5}', why: 'Second restriction: $\\delta \\le \\frac{\\varepsilon}{5}$ makes the bound smaller than $\\varepsilon$.' },
            { tex: '\\delta = \\min\\left(1, \\tfrac{\\varepsilon}{5}\\right)', why: 'Both restrictions must hold, so take the smaller of the two.' },
          ],
          result: 'Choose $\\delta = \\min\\left(1, \\frac{\\varepsilon}{5}\\right)$.',
        },
        {
          type: 'derivation',
          title: 'Proof that $\\lim_{x \\to 2} x^2 = 4$',
          steps: [
            { tex: '\\text{Let } \\varepsilon > 0. \\text{ Choose } \\delta = \\min\\left(1, \\tfrac{\\varepsilon}{5}\\right) > 0.', why: 'Set up exactly as in the linear proof.' },
            { tex: '\\text{Suppose } 0 < |x - 2| < \\delta.', why: 'An arbitrary input in the punctured strip.' },
            { tex: '\\delta \\le 1 \\implies 1 < x < 3 \\implies |x + 2| < 5', why: 'The first half of the $\\min$ is doing its job.' },
            { tex: '\\delta \\le \\tfrac{\\varepsilon}{5} \\implies |x - 2| < \\tfrac{\\varepsilon}{5}', why: 'The second half of the $\\min$.' },
            { tex: '|x^2 - 4| = |x - 2|\\,|x + 2| < \\tfrac{\\varepsilon}{5}\\cdot 5 = \\varepsilon', why: 'Multiply the two bounds (both factors are nonnegative, so this is legal).' },
          ],
          result: 'Hence $|x^2 - 4| < \\varepsilon$ whenever $0 < |x - 2| < \\delta$, so $\\lim_{x \\to 2} x^2 = 4$. $\\blacksquare$',
        },
        {
          type: 'graph',
          x: [0.5, 3.5],
          y: [0, 9.5],
          areas: [
            { expr: '4 + u', expr2: '4 - u', from: 0.5, to: 3.5, color: 'green' },
            { expr: '9.5', expr2: '0', from: '2 - min(1, u/5)', to: '2 + min(1, u/5)', color: 'blue' },
          ],
          functions: [
            { expr: 'x^2', color: 'gray' },
            { expr: 'x^2', color: 'red', domain: ['2 - min(1, u/5)', '2 + min(1, u/5)'] },
          ],
          points: [{ x: 2, y: 4, open: true }],
          sliders: [{ name: 'u', min: 0.1, max: 5, step: 0.05, value: 2, label: '$\\varepsilon$' }],
          readouts: [
            { label: '$\\delta = \\min(1, \\varepsilon/5) =$', expr: 'min(1, u/5)', digits: 4 },
            { label: 'worst $|x^2 - 4|$ in strip $\\approx$', expr: '4min(1, u/5) + min(1, u/5)^2', digits: 4 },
          ],
          caption: 'Now $\\delta$ is computed from $\\varepsilon$ by the proof\'s formula. Whatever $\\varepsilon$ you choose, the red piece stays inside the green band: the proof wins every round. For $\\varepsilon \\le 5$ the $\\frac{\\varepsilon}{5}$ term is the smaller one.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the $\\min$ is necessary',
          text: 'With just $\\delta = \\frac{\\varepsilon}{5}$, a lenient challenger choosing $\\varepsilon = 50$ would get $\\delta = 10$, letting $x$ wander out to $12$, where $|x + 2| = 14$ — far beyond our bound of $5$. The cap $\\delta \\le 1$ keeps $x$ inside $(1, 3)$ where the bound is valid. Each half of the $\\min$ protects one step of the proof.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student tries to prove $\\lim\\limits_{x \\to 2} x^2 = 4$. Tap the first incorrect line.',
      lines: [
        'Let $\\varepsilon > 0$. We need $|x^2 - 4| = |x - 2|\\,|x + 2| < \\varepsilon$.',
        'Require $\\delta \\le 1$. Then $|x - 2| < 1$, so $1 < x < 3$.',
        'Therefore $|x + 2| < 3$.',
        'Choose $\\delta = \\min\\left(1, \\frac{\\varepsilon}{3}\\right)$.',
        'Then $|x^2 - 4| = |x - 2|\\,|x + 2| < \\frac{\\varepsilon}{3}\\cdot 3 = \\varepsilon$.',
      ],
      errorLines: [3],
      explanation: 'From $1 < x < 3$, adding $2$ gives $3 < x + 2 < 5$, so the correct bound is $|x + 2| < 5$; the student used the upper end of the $x$-interval instead of the upper end of $x + 2$. The "proof" is genuinely broken: with $\\varepsilon = 3$ it picks $\\delta = 1$, but $x = 2.9$ gives $|2.9^2 - 4| = 4.41 > 3$. With the correct bound, $\\delta = \\min\\left(1, \\frac{\\varepsilon}{5}\\right)$ works.',
    },
    {
      kind: 'numeric',
      prompt: 'A proof that $\\lim\\limits_{x \\to 3} x^2 = 9$ uses $|x^2 - 9| = |x - 3|\\,|x + 3|$ and first requires $\\delta \\le 1$. It then chooses $\\delta = \\min\\left(1, \\frac{\\varepsilon}{K}\\right)$ for the right constant $K$. What $\\delta$ does this proof give when $\\varepsilon = 0.7$?',
      hint: 'If $|x - 3| < 1$ then $2 < x < 4$. What bound does that give on $|x + 3|$? That bound is $K$.',
      label: '$\\delta =$',
      answer: '0.1',
      explanation: '$|x - 3| < 1$ gives $2 < x < 4$, so $5 < x + 3 < 7$ and $|x + 3| < 7$. Then $|x^2 - 9| < 7|x - 3|$, which is below $\\varepsilon$ when $|x - 3| < \\frac{\\varepsilon}{7}$. So $K = 7$ and $\\delta = \\min\\left(1, \\frac{0.7}{7}\\right) = \\min(1, 0.1) = 0.1$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'When the limit does not exist — and why this matters',
      blocks: [
        {
          type: 'p',
          text: 'The definition can also prove that a limit **fails** to exist. Negating "for every $\\varepsilon$ there is a $\\delta$" gives: **there is some $\\varepsilon > 0$ for which no $\\delta$ works**. The challenger needs only one unbeatable tolerance.',
        },
        {
          type: 'p',
          text: 'Take the step function $H(x) = 0$ for $x < 0$ and $H(x) = 1$ for $x \\ge 0$ (a jump, like a switch flipping on). Intuitively there is no single height near $x = 0$. Here is the precise argument.',
        },
        {
          type: 'derivation',
          title: 'Show $\\lim_{x \\to 0} H(x)$ does not exist',
          steps: [
            { tex: '\\text{Suppose } \\lim_{x \\to 0} H(x) = L \\text{ for some } L. \\text{ Take } \\varepsilon = \\tfrac{1}{2}.', why: 'Proof by contradiction. The challenger picks a band of total width $1$, too thin to contain both heights $0$ and $1$.' },
            { tex: '\\text{Any } \\delta > 0 \\text{ allows } x_1 = -\\tfrac{\\delta}{2} \\text{ and } x_2 = \\tfrac{\\delta}{2}', why: 'Every strip around $0$ contains points on both sides of the jump.' },
            { tex: '|0 - L| < \\tfrac{1}{2} \\quad\\text{and}\\quad |1 - L| < \\tfrac{1}{2}', why: 'If $\\delta$ worked, both $H(x_1) = 0$ and $H(x_2) = 1$ would be within $\\frac{1}{2}$ of $L$.' },
            { tex: '1 = |1 - 0| \\le |1 - L| + |L - 0| < \\tfrac{1}{2} + \\tfrac{1}{2} = 1', why: 'Triangle inequality $|p + q| \\le |p| + |q|$ with $p = 1 - L$, $q = L - 0$. We get $1 < 1$: a contradiction.' },
          ],
          result: 'No $L$ can win the round $\\varepsilon = \\frac{1}{2}$, so $\\lim_{x \\to 0} H(x)$ does not exist.',
        },
        {
          type: 'p',
          text: 'With the definition in hand, everything earlier in this unit can be proved rather than believed: each limit law, the Squeeze Theorem (the band argument from that lesson, now with $\\varepsilon$ and $\\delta$), and even the fact that a limit, if it exists, is **unique**. You will not usually compute limits this way — the laws are much faster — but the definition is the reason the laws are true.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Tolerance checks in code',
          text: 'Programmers write ε-tests constantly: `std::abs(a - b) < eps` for comparing floats, `EXPECT_NEAR(actual, expected, eps)` in unit tests, "close enough to the target" checks in a game\'s pathfinding. But a test checks *finitely many* tolerances and inputs. A proof covers **every** $\\varepsilon$ and **every** $x$ in the strip at once — that is the leap from evidence to certainty. The program below checks our proof\'s $\\delta$ numerically for three tolerances.',
        },
        {
          type: 'code',
          title: 'epsilon_delta.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>

int main() {
    const double a = 2.0, L = 4.0;
    for (double eps : {1.0, 0.1, 0.01}) {
        double delta = std::min(1.0, eps / 5);
        double worst = 0;
        const int N = 100000;
        for (int i = 1; i < N; ++i) {
            double x = a - delta + 2 * delta * i / N;
            if (x == a) continue;
            worst = std::max(worst, std::abs(x * x - L));
        }
        std::printf("eps = %-5g delta = %-7g worst |f(x) - L| = %.6f  %s\\n",
                    eps, delta, worst, worst < eps ? "OK" : "FAIL");
    }
}`,
          output: `eps = 1     delta = 0.2     worst |f(x) - L| = 0.839982  OK
eps = 0.1   delta = 0.02    worst |f(x) - L| = 0.080398  OK
eps = 0.01  delta = 0.002   worst |f(x) - L| = 0.008004  OK`,
          annotations: [
            { lines: 8, text: 'The proof\'s choice $\\delta = \\min(1, \\varepsilon/5)$.' },
            { lines: '11-13', text: 'Sample points strictly inside $(a - \\delta, a + \\delta)$, skipping $x = a$ itself: the condition $0 < |x - a| < \\delta$.' },
            { lines: 14, text: 'Track the largest output error $|f(x) - L|$ seen. It approaches $4\\delta + \\delta^2$ but stays below it.' },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'To show that $\\lim\\limits_{x \\to 0} H(x) = \\frac{1}{2}$ is false for the step function $H$ (which is $0$ for $x < 0$ and $1$ for $x \\ge 0$), which challenge $\\varepsilon$ is unbeatable?',
      options: [
        {
          text: '$\\varepsilon = 2$',
          why: 'The band $\\left(\\frac{1}{2} - 2, \\frac{1}{2} + 2\\right) = (-1.5, 2.5)$ contains both $0$ and $1$, so every $\\delta$ wins this round.',
        },
        {
          text: '$\\varepsilon = 1$',
          why: 'The band $(-0.5, 1.5)$ still contains both heights $0$ and $1$, so any $\\delta$ wins.',
        },
        {
          text: '$\\varepsilon = \\frac{1}{4}$',
          correct: true,
          why: 'The band $\\left(\\frac{1}{4}, \\frac{3}{4}\\right)$ contains neither $0$ nor $1$. Every strip around $0$ contains points where $H$ is $0$ or $1$, so no $\\delta$ works.',
        },
        {
          text: 'None — the limit really is $\\frac{1}{2}$, the average of the two sides',
          why: 'A limit is not an average of one-sided values. $H(x)$ is never near $\\frac{1}{2}$: its values are exactly $0$ or $1$.',
        },
      ],
      explanation: 'To disprove $\\lim = L$, the challenger needs a band around $L$ that the graph keeps escaping no matter how thin the strip. Around $L = \\frac{1}{2}$, any $\\varepsilon \\le \\frac{1}{2}$ excludes both heights $0$ and $1$ (at exactly $\\varepsilon = \\frac{1}{2}$ the strict inequality still excludes them). Larger tolerances are too generous to catch the jump.',
    },
  ],
  takeaways: [
    '$\\lim_{x \\to a} f(x) = L$ means: for every $\\varepsilon > 0$ there is a $\\delta > 0$ such that $0 < |x - a| < \\delta$ implies $|f(x) - L| < \\varepsilon$.',
    'Graphically: for every horizontal band of half-width $\\varepsilon$ around $L$, some vertical strip of half-width $\\delta$ around $a$ keeps the graph (ignoring $x = a$) inside the band.',
    'Find $\\delta$ by scratch work backwards from $|f(x) - L| < \\varepsilon$; present the proof forwards: let $\\varepsilon > 0$, choose $\\delta$, suppose $0 < |x - a| < \\delta$, conclude $|f(x) - L| < \\varepsilon$.',
    'For lines, $\\delta = \\frac{\\varepsilon}{|m|}$. For $x^2$ near $2$, bound $|x + 2| < 5$ by requiring $\\delta \\le 1$, giving $\\delta = \\min\\left(1, \\frac{\\varepsilon}{5}\\right)$.',
    'A limit fails to exist when some single $\\varepsilon$ defeats every $\\delta$, as with the jump at $0$ in the step function.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 2.5 The Precise Definition of a Limit',
      url: 'https://openstax.org/books/calculus-volume-1/pages/2-5-the-precise-definition-of-a-limit',
      source: 'openstax',
      note: 'More ε-δ proofs, including one-sided and infinite limits, with the same two-phase approach.',
    },
    {
      title: "Paul's Online Notes — The Definition of the Limit",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit.aspx',
      source: 'paul',
      note: 'Patient, detailed proofs for linear, quadratic and other functions, with the min trick explained step by step.',
    },
    {
      title: 'Wikipedia — (ε, δ)-definition of limit',
      url: 'https://en.wikipedia.org/wiki/(%CE%B5,_%CE%B4)-definition_of_limit',
      source: 'wikipedia',
      note: 'History of the definition from Cauchy to Weierstrass, plus worked examples.',
    },
  ],
};
