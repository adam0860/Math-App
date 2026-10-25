import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-series-strategy',
  title: 'Strategy for Testing Series',
  summary: 'A decision process for choosing the right convergence test quickly — then plenty of mixed practice to make it automatic.',
  minutes: 20,
  objectives: [
    'Summarise what each convergence test needs and what it can conclude',
    'Follow a decision process: divergence check, special forms, alternating, ratio/root, comparison, integral',
    'Read off the dominant behaviour of a term using the growth hierarchy $\\ln n \\ll n^p \\ll c^n \\ll n! \\ll n^n$',
    'Classify mixed series as absolutely convergent, conditionally convergent or divergent, naming the test used',
    'Spot invalid arguments such as comparing in the wrong direction or concluding from $L = 1$',
  ],
  steps: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The toolbox at a glance',
      blocks: [
        {
          type: 'p',
          text: 'You now own about eight convergence tests. On an exam nobody tells you which one to use — the skill being tested is *choosing*. The good news: the form of the term $a_n$ almost always points to the right test, and a fixed order of questions gets you there quickly.',
        },
        {
          type: 'table',
          headers: ['Test', 'Use when', 'Conclusion', 'Watch out'],
          rows: [
            ['[[divergence-test|Divergence]]', 'always, first', '$\\lim a_n \\ne 0 \\Rightarrow$ diverges', 'cannot prove convergence'],
            ['[[geometric-series|Geometric]]', '$\\sum a r^{n}$', 'converges iff $|r| < 1$, sum $\\frac{\\text{first term}}{1 - r}$', 'find $r$ after simplifying'],
            ['[[p-series]]', '$\\sum \\frac{1}{n^p}$', 'converges iff $p > 1$', '$p = 1$ diverges'],
            ['[[telescoping-series|Telescoping]]', 'partial fractions cancel', 'find $\\lim S_N$ directly', 'write out enough terms'],
            ['[[alternating-series-test|Alternating]]', '$\\sum (-1)^n b_n$', '$b_n \\downarrow 0 \\Rightarrow$ converges', 'never proves divergence'],
            ['[[ratio-test|Ratio]] / [[root-test|Root]]', 'factorials, $c^n$, $(\\dots)^n$', '$L<1$ abs. conv., $L>1$ div.', '$L = 1$ inconclusive'],
            ['[[comparison-test|Comparison]] / [[limit-comparison-test|LCT]]', 'positive, algebraic in $n$', 'behaves like the comparison series', 'inequality direction'],
            ['[[integral-test|Integral]]', '$f(n)$ positive, decreasing, integrable', 'same fate as $\\int_1^\\infty f$', 'check the hypotheses'],
          ],
          caption: 'Every test you have learned. The first column links to the glossary.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a fixed order?',
          text: 'The tests differ wildly in cost. The Divergence Test takes ten seconds and sometimes ends the problem; recognising a geometric or $p$-series takes a glance. An integral test can take half a page. Asking the cheap questions first means you only do expensive work when you must — the same reason a program checks the fast, common cases before the slow general one.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What is the quickest correct conclusion about $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^2}{n^2 + 5}$?',
      options: [
        {
          text: 'Diverges by the Divergence Test',
          correct: true,
          why: '$\\lim \\frac{n^2}{n^2+5} = 1 \\ne 0$. The terms do not shrink to $0$, so the series diverges. Done in one line.',
        },
        {
          text: 'Converges by limit comparison with $\\sum \\frac{1}{n^2}$',
          why: 'The dominant terms are $\\frac{n^2}{n^2} = 1$, not $\\frac{1}{n^2}$. Limit comparison with $\\frac{1}{n^2}$ gives $\\lim \\frac{n^4}{n^2 + 5} = \\infty$, which says nothing.',
        },
        {
          text: 'Converges, because the Ratio Test gives $L = 1$',
          why: '$L = 1$ is inconclusive — it never proves convergence.',
        },
        {
          text: 'Cannot be decided with the tests we know',
          why: 'It can: the very first test in the strategy settles it.',
        },
      ],
      explanation: 'Always start with $\\lim a_n$. Here the degrees of numerator and denominator match, so the limit is the ratio of leading coefficients, $1$. Adding infinitely many numbers close to $1$ gives $\\infty$. Spending time on comparisons or ratio tests first would be wasted effort.',
    },
    // 2 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'The decision flowchart',
      blocks: [
        {
          type: 'p',
          text: 'Here is the order of questions to ask about $\\sum a_n$. Stop as soon as one step gives a conclusion.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Do the terms go to 0?',
              text: 'Compute $\\lim a_n$. If it is not $0$ (or does not exist), the series **diverges** by the Divergence Test. If it is $0$, you have learned nothing yet — go on.',
            },
            {
              title: 'Is it a special series?',
              text: '**Geometric** $\\sum a r^n$: converges iff $|r| < 1$. **$p$-series** $\\sum \\frac{1}{n^p}$: converges iff $p > 1$. **Telescoping**: partial fractions make the partial sums collapse. These also give exact sums (geometric, telescoping).',
            },
            {
              title: 'Are the signs alternating (or mixed)?',
              text: 'First test $\\sum |a_n|$ with steps 4–6. If it converges, the series is **absolutely convergent**. If not, try the **Alternating Series Test**: if it passes, the series is **conditionally convergent**.',
            },
            {
              title: 'Factorials or exponentials? Ratio. An nth power? Root.',
              text: 'Terms with $n!$, $c^n$ or products like $1\\cdot 3 \\cdot 5\\cdots(2n-1)$: use the **Ratio Test**. A term of the form $(\\dots)^n$: use the **Root Test**. Expect $L = 1$ (useless) if there are only powers of $n$.',
            },
            {
              title: 'Algebraic in n? Compare with a p-series.',
              text: 'For positive terms built from powers and roots of $n$ (and bounded factors like $\\sin^2 n$), keep only the dominant terms of numerator and denominator to guess $\\frac{1}{n^p}$. Confirm with the **Limit Comparison Test** (or a direct comparison).',
            },
            {
              title: 'Easy to integrate? Integral Test.',
              text: 'If $a_n = f(n)$ with $f$ positive, continuous and decreasing, and $\\int f(x)\\,dx$ is easy — typically $\\ln$ terms like $\\frac{1}{n \\ln n}$ or $n e^{-n^2}$ — use the **Integral Test**.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Absolute convergence first, then alternating',
          text: 'For an alternating series, checking $\\sum |a_n|$ first is efficient: if it converges, you are done *and* you have the stronger classification. Only when $\\sum |a_n|$ diverges do you need the AST to decide between conditional convergence and divergence.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The flowchart chooses a test; it does not replace checking hypotheses. The Integral and Comparison Tests need positive terms, the AST needs decreasing sizes, and limit comparison needs a finite positive limit.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the strategy questions in the order you should ask them.',
      lines: [
        'Does $\\lim a_n = 0$? If not, the series diverges.',
        'Is it geometric, a $p$-series, or telescoping?',
        'Do the signs alternate? Test $\\sum |a_n|$, then the AST.',
        'Factorials or exponentials? Try the Ratio (or Root) Test.',
        'Algebraic in $n$? Limit-compare with a $p$-series.',
        'Easy to integrate? Use the Integral Test.',
      ],
      distractors: ['Apply the Ratio Test to every series first.'],
      explanation: 'Cheap checks first: the Divergence Test and recognising a special form take seconds. Sign behaviour decides which family of tests applies. The Ratio/Root Tests handle fast-growing pieces, comparisons handle algebraic terms, and the Integral Test is the heavy machinery saved for last. The distractor fails because the Ratio Test returns the useless $L = 1$ on every algebraic series.',
    },
    {
      kind: 'numeric',
      prompt: 'Step 1 of the strategy for $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{5n^2 - 1}{2n^2 + 3n}$: compute $\\lim_{n \\to \\infty} a_n$.',
      label: '$\\lim a_n =$',
      answer: '5/2',
      answerTex: '\\frac{5}{2}',
      explanation: 'Divide numerator and denominator by $n^2$: $\\frac{5 - 1/n^2}{2 + 3/n} \\to \\frac{5}{2}$. Since the limit is $\\frac{5}{2} \\ne 0$, the series **diverges** by the Divergence Test, and the problem is finished at step 1.',
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Reading the dominant term: the growth hierarchy',
      blocks: [
        {
          type: 'p',
          text: 'Most strategy decisions come from one skill: seeing which part of $a_n$ *dominates* for large $n$. As $n \\to \\infty$ these families are strictly ordered — each one eventually beats any constant multiple, and any fixed power, of the one before:',
        },
        {
          type: 'math',
          tex: '\\ln n \\;\\ll\\; n^p \\;(p > 0) \\;\\ll\\; c^n \\;(c > 1) \\;\\ll\\; n! \\;\\ll\\; n^n',
          caption: '$f \\ll g$ means $\\frac{f(n)}{g(n)} \\to 0$.',
        },
        {
          type: 'p',
          text: 'So $\\frac{n^{100}}{1.01^n} \\to 0$, $\\frac{5^n}{n!} \\to 0$ and $\\frac{(\\ln n)^{10}}{\\sqrt{n}} \\to 0$, however lopsided they look for small $n$. Drag the sliders below: no matter how large the power $p$ or how close $c$ is to $1$, the exponential eventually wins.',
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 1.2],
          yStep: 0.2,
          functions: [{ expr: '(x/(p/ln(c)))^p * c^(p/ln(c) - x)', label: '$\\frac{n^p}{c^n}$, scaled so its peak is $1$', domain: [0, 100] }],
          vlines: [{ x: 'p/ln(c)', label: 'peak', color: 'orange' }],
          sliders: [
            { name: 'p', min: 1, max: 10, step: 1, value: 3, label: '$p$' },
            { name: 'c', min: 1.05, max: 3, step: 0.01, value: 1.2, label: '$c$' },
          ],
          readouts: [{ label: 'peak at $n = \\frac{p}{\\ln c} \\approx$', expr: 'p/ln(c)', digits: 3 }],
          caption: 'The term $\\frac{n^p}{c^n}$ climbs while the polynomial is winning, peaks at $n = \\frac{p}{\\ln c}$, then decays exponentially. Convergence only cares about the tail, so the Ratio Test sees $L = \\frac{1}{c} < 1$.',
        },
        {
          type: 'derivation',
          title: 'Dominant terms in action: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{2n + 5}{n^3 - n + 4}$',
          steps: [
            { tex: 'n^3 - n + 4 > 0 \\text{ for } n \\ge 1', why: 'At $n = 1$ it is $4$, and $n^3$ grows faster than $n$, so all terms are positive — required for comparison tests.' },
            { tex: 'a_n \\approx \\frac{2n}{n^3} = \\frac{2}{n^2}', why: 'Keep only the dominant term on top ($2n$) and on the bottom ($n^3$). This suggests comparing with $b_n = \\frac{1}{n^2}$.' },
            { tex: '\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = \\lim_{n\\to\\infty} \\frac{(2n+5)\\,n^2}{n^3 - n + 4} = \\lim_{n\\to\\infty} \\frac{2 + 5/n}{1 - 1/n^2 + 4/n^3}', why: 'Multiply by $n^2$, then divide top and bottom by $n^3$.' },
            { tex: '= 2', why: 'A finite positive limit, so $\\sum a_n$ and $\\sum \\frac{1}{n^2}$ share the same fate.' },
          ],
          result: '$\\sum \\frac{1}{n^2}$ converges ($p = 2 > 1$), so the series converges by the Limit Comparison Test.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Same idea as Big-O',
          text: 'This is the same ranking you use for algorithm complexity: $O(\\log n) \\subset O(n^k) \\subset O(2^n) \\subset O(n!)$. Picking the dominant term of $a_n$ is exactly like simplifying $3n^2 + 50n\\log n + 7$ to $O(n^2)$ — lower-order terms do not change the long-run behaviour.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Classify $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^{100}}{1.01^n}$.',
      options: [
        {
          text: 'Diverges, because the terms are astronomically large for small $n$',
          why: 'Any finite number of terms is irrelevant to convergence. Only the tail matters, and the tail decays.',
        },
        {
          text: 'Converges, by the Ratio Test',
          correct: true,
          why: '$\\left(\\frac{n+1}{n}\\right)^{100}\\cdot\\frac{1}{1.01} \\to \\frac{1}{1.01} = \\frac{100}{101} < 1$.',
        },
        {
          text: 'The Ratio Test is inconclusive because $L$ is so close to $1$',
          why: '$L = \\frac{100}{101}$ is less than $1$, and that is all the test needs. Close to $1$ is not equal to $1$.',
        },
        {
          text: 'Diverges by the Divergence Test',
          why: 'The terms do approach $0$: $c^n$ beats $n^p$ for any $c > 1$.',
        },
      ],
      explanation: 'By the growth hierarchy the exponential $1.01^n$ eventually overwhelms $n^{100}$ (the peak is near $n = \\frac{100}{\\ln 1.01} \\approx 10050$). The Ratio Test makes that precise: $L = \\frac{1}{1.01} < 1$, so the series converges absolutely. The partial sums get enormous before they level off — but they do level off.',
    },
    {
      kind: 'mcq',
      prompt: 'Which conclusion about $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ is correct?',
      options: [
        {
          text: 'Converges by comparison with $\\sum \\frac{1}{n}$, since $\\frac{1}{n \\ln n} < \\frac{1}{n}$',
          why: 'Being smaller than a *divergent* series proves nothing. The comparison is in the useless direction.',
        },
        {
          text: 'Converges because it is a $p$-series with $p > 1$',
          why: '$n \\ln n$ is not a power of $n$. It grows faster than $n$ but slower than $n^{1 + \\epsilon}$ for every $\\epsilon > 0$.',
        },
        {
          text: 'Diverges by the Integral Test',
          correct: true,
          why: 'With $u = \\ln x$, $\\int_2^b \\frac{dx}{x \\ln x} = \\ln(\\ln b) - \\ln(\\ln 2) \\to \\infty$.',
        },
        {
          text: 'Diverges by the Divergence Test',
          why: 'The terms do go to $0$, so the Divergence Test is inconclusive.',
        },
      ],
      explanation: 'A $\\ln$ in the denominator together with a matching $\\frac{1}{x}$ is a signal for the Integral Test: $f(x) = \\frac{1}{x \\ln x}$ is positive, continuous and decreasing for $x \\ge 2$, and the substitution $u = \\ln x$, $du = \\frac{dx}{x}$ turns the integral into $\\int \\frac{du}{u} = \\ln|u|$. Since $\\ln(\\ln b) \\to \\infty$ (very slowly!), the series diverges.',
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Worked examples: following the flowchart',
      blocks: [
        {
          type: 'p',
          text: 'Watch the decision process run on three different series. Each starts with the cheap checks and moves on only when they say nothing.',
        },
        {
          type: 'derivation',
          title: 'Example 1: $\\displaystyle\\sum_{n=1}^{\\infty} n^2 e^{-n}$',
          steps: [
            { tex: 'a_n = \\frac{n^2}{e^n} \\to 0', why: 'Step 1: exponentials beat polynomials, so the Divergence Test is inconclusive. Not a special series; positive terms.' },
            { tex: '\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{e^{n+1}} \\cdot \\frac{e^n}{n^2} = \\left(\\frac{n+1}{n}\\right)^2 \\frac{1}{e}', why: 'Step 4: an exponential is present, so use the Ratio Test.' },
            { tex: '\\to \\frac{1}{e} < 1', why: 'The polynomial ratio tends to $1$.' },
          ],
          result: 'Converges (absolutely) by the Ratio Test.',
        },
        {
          type: 'derivation',
          title: 'Example 2: $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{\\ln n}$',
          steps: [
            { tex: '\\frac{1}{\\ln n} \\to 0', why: 'Step 1 is inconclusive. Step 3: the signs alternate, so check absolute convergence first.' },
            { tex: '\\left|a_n\\right| = \\frac{1}{\\ln n} > \\frac{1}{n} \\quad (n \\ge 2)', why: 'Because $\\ln n < n$. The absolute series is *bigger* than the divergent harmonic series (from $n = 2$ on), so it diverges by comparison.' },
            { tex: 'b_n = \\frac{1}{\\ln n} \\text{ is decreasing and } \\to 0', why: '$\\ln n$ increases, so its reciprocal decreases. The AST applies.' },
          ],
          result: 'The series converges by the AST but not absolutely: **conditionally convergent**.',
        },
        {
          type: 'derivation',
          title: 'Example 3: $\\displaystyle\\sum_{n=1}^{\\infty} \\left(\\frac{n}{2n + 1}\\right)^n$',
          steps: [
            { tex: 'a_n \\to 0', why: 'Step 1: the base is below $\\frac{1}{2}$, so $a_n < \\left(\\frac{1}{2}\\right)^n \\to 0$. Inconclusive.' },
            { tex: '\\sqrt[n]{a_n} = \\frac{n}{2n+1} = \\frac{1}{2 + 1/n}', why: 'Step 4: the whole term is an $n$th power, so take the $n$th root.' },
            { tex: '\\to \\frac{1}{2} < 1', why: 'Let $n \\to \\infty$.' },
          ],
          result: 'Converges (absolutely) by the Root Test. (Comparison with the geometric series $\\sum \\left(\\frac{1}{2}\\right)^n$ works too — there is often more than one valid route.)',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams usually grade three things: the **test named**, its **hypotheses checked** (positive terms, decreasing, finite positive limit…), and the **conclusion stated precisely** — "converges absolutely", "converges conditionally" or "diverges". A correct verdict with no justification typically earns little credit.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Classify $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^n \\frac{n!}{4^n}$.',
      options: [
        {
          text: 'Converges by the Alternating Series Test',
          why: 'The AST needs $b_n = \\frac{n!}{4^n} \\to 0$, but factorials beat exponentials, so $b_n \\to \\infty$.',
        },
        {
          text: 'Converges conditionally',
          why: 'It does not converge at all — its terms grow without bound in size.',
        },
        {
          text: 'Converges absolutely by the Ratio Test',
          why: 'The ratio is $\\frac{n+1}{4}$, which tends to $\\infty$, not to a number below $1$.',
        },
        {
          text: 'Diverges',
          correct: true,
          why: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n+1}{4} \\to \\infty > 1$, so it diverges by the Ratio Test (equivalently, $|a_n| \\to \\infty$, so the Divergence Test applies).',
        },
      ],
      explanation: 'The growth hierarchy says $n! \\gg 4^n$, so the sizes $\\frac{n!}{4^n}$ blow up and the terms cannot approach $0$. Alternating signs cannot rescue a series whose terms do not shrink. Formally: Ratio Test, $L = \\infty$, diverges.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the exact sum of the telescoping series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n(n+2)}$.',
      hint: 'Partial fractions: $\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$. Which terms survive the cancellation?',
      label: '$S =$',
      answer: '3/4',
      answerTex: '\\frac{3}{4}',
      explanation: 'With $\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$, each $-\\frac{1}{n+2}$ cancels a later $+\\frac{1}{n+2}$. The partial sum is $S_N = \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{N+1} - \\frac{1}{N+2}\\right)$: only the first two positive terms and last two negative terms survive. As $N \\to \\infty$, $S_N \\to \\frac{1}{2}\\cdot\\frac{3}{2} = \\frac{3}{4}$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find the exact sum of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n\\, 2^n}{3^{n+1}}$.',
      hint: 'Rewrite the term as $\\frac{1}{3}\\left(-\\frac{2}{3}\\right)^n$. What are the first term and the ratio?',
      label: '$S =$',
      answer: '1/5',
      answerTex: '\\frac{1}{5}',
      explanation: '$\\frac{(-1)^n 2^n}{3^{n+1}} = \\frac{1}{3}\\left(-\\frac{2}{3}\\right)^n$: a geometric series with first term $\\frac{1}{3}$ (at $n = 0$) and ratio $r = -\\frac{2}{3}$, $|r| < 1$. So $S = \\frac{1/3}{1 - (-2/3)} = \\frac{1/3}{5/3} = \\frac{1}{5}$. It is also alternating, but recognising the geometric form gives the exact sum, not just convergence.',
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      kind: 'concept',
      title: 'Traps, and how to write it up',
      blocks: [
        {
          type: 'p',
          text: 'Most lost points in series problems come from a handful of logical slips, not from hard algebra. Each one below is an argument that *sounds* right.',
        },
        {
          type: 'list',
          items: [
            '**"The terms go to 0, so it converges."** The Divergence Test only ever proves divergence. $\\sum \\frac{1}{n}$ has $\\frac{1}{n} \\to 0$ and diverges.',
            '**Comparing in the useless direction.** Smaller than a convergent series ⇒ converges. Bigger than a divergent series ⇒ diverges. *Bigger than convergent* or *smaller than divergent* proves nothing.',
            '**Concluding from $L = 1$.** Ratio and Root Tests are silent when $L = 1$.',
            '**"The AST failed, so it diverges."** A failed AST is inconclusive; use the Divergence Test or another test.',
            '**Stopping at "converges" for a mixed-sign series** when the question asks for absolute vs conditional convergence.',
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Invalid',
            tone: 'bad',
            tex: ['\\frac{1}{n^2 + n} < \\frac{1}{n}', '\\sum \\frac{1}{n} \\text{ diverges}', '\\therefore \\sum \\frac{1}{n^2+n} \\text{ diverges}'],
            text: 'Being smaller than a divergent series tells you nothing.',
          },
          right: {
            title: 'Valid',
            tone: 'good',
            tex: ['0 < \\frac{1}{n^2 + n} < \\frac{1}{n^2}', '\\sum \\frac{1}{n^2} \\text{ converges } (p = 2)', '\\therefore \\sum \\frac{1}{n^2+n} \\text{ converges by comparison}'],
            text: 'Smaller than a convergent series: that direction works. (It even telescopes, to $1$.)',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A two-second sanity check',
          text: 'Before writing anything, guess the answer from dominant terms: "this is like $\\frac{1}{n^{3/2}}$, so it should converge." Then choose a test that proves the guess. If your test says the opposite of your guess, recheck the algebra — usually one of them has a slip.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student tests $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{1}{n^2 - 1}$. The conclusion happens to be right, but the reasoning is not. Tap the first invalid line.',
      lines: [
        'For $n \\ge 2$, $n^2 - 1 > 0$, so every term is positive.',
        'Since $n^2 - 1 < n^2$, we have $\\dfrac{1}{n^2 - 1} > \\dfrac{1}{n^2}$.',
        '$\\sum \\dfrac{1}{n^2}$ converges because it is a $p$-series with $p = 2 > 1$.',
        'Our terms are bigger than those of a convergent series, so $\\sum \\dfrac{1}{n^2-1}$ converges by the Comparison Test.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are all true, but line 4 uses the comparison in the useless direction: being *bigger* than a convergent series proves nothing. A valid route is the Limit Comparison Test with $\\frac{1}{n^2}$: $\\lim \\frac{n^2}{n^2 - 1} = 1$, a finite positive number, so the series converges. (It actually telescopes: $\\frac{1}{n^2-1} = \\frac{1}{2}\\left(\\frac{1}{n-1} - \\frac{1}{n+1}\\right)$, giving the sum $\\frac{3}{4}$.)',
    },
    {
      kind: 'truefalse',
      prompt: 'If $\\lim_{n\\to\\infty} a_n = 0$, then $\\sum a_n$ converges.',
      answer: false,
      explanation: 'Terms going to $0$ is necessary but far from sufficient. The harmonic series $\\sum \\frac{1}{n}$ has $\\frac{1}{n} \\to 0$ yet diverges, and so does $\\sum \\frac{1}{n \\ln n}$. The Divergence Test is one-directional: $\\lim a_n \\ne 0 \\Rightarrow$ diverges. When $\\lim a_n = 0$, go to the next step of the strategy.',
    },
    {
      kind: 'mcq',
      prompt: 'Classify $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^n}{n!}$.',
      options: [
        {
          text: 'Converges, since the Ratio Test gives $L = \\frac{1}{e}$',
          why: 'That is the ratio for the *reciprocal* series $\\sum \\frac{n!}{n^n}$. Here the fraction is upside down, so $L = e$.',
        },
        {
          text: 'Diverges, since the Ratio Test gives $L = e > 1$',
          correct: true,
          why: '$\\frac{(n+1)^{n+1}}{(n+1)!}\\cdot\\frac{n!}{n^n} = \\frac{(n+1)^n}{n^n} = \\left(1 + \\frac{1}{n}\\right)^n \\to e$.',
        },
        {
          text: 'The Ratio Test is inconclusive',
          why: 'The limit is $e \\approx 2.718$, not $1$.',
        },
        {
          text: 'Converges by comparison with $\\sum \\frac{1}{n^2}$',
          why: 'The terms are not even small: $\\frac{n^n}{n!} \\ge 1$ for every $n$, because $n^n = n \\cdot n \\cdots n \\ge n(n-1)\\cdots 1$.',
        },
      ],
      explanation: 'In the growth hierarchy $n^n \\gg n!$, so these terms blow up. The Ratio Test confirms it: after cancelling $\\frac{(n+1)!}{n!} = n + 1$ against one factor of $(n+1)^{n+1}$, the ratio is $\\left(1 + \\frac{1}{n}\\right)^n \\to e > 1$. The Divergence Test also works, since $a_n \\ge 1$.',
    },
    {
      kind: 'fill',
      prompt: 'Choose the most natural test for each series.',
      template: 'For $\\sum \\frac{3^n}{n!}$ use the ___ Test; for $\\sum \\frac{1}{n^2 + \\sqrt{n}}$ use the ___ Test; for $\\sum \\left(\\frac{n}{3n+1}\\right)^n$ use the ___ Test.',
      blanks: [{ answers: ['Ratio'] }, { answers: ['Limit Comparison'] }, { answers: ['Root'] }],
      wordBank: ['Ratio', 'Limit Comparison', 'Root', 'Integral', 'Divergence', 'Alternating Series'],
      explanation: 'A factorial points to the **Ratio** Test ($L = \\lim \\frac{3}{n+1} = 0$, converges). An algebraic term behaves like its dominant part $\\frac{1}{n^2}$, so **limit-compare** with $\\sum \\frac{1}{n^2}$ (limit $1$, converges). A term that is an $n$th power points to the **Root** Test ($L = \\frac{1}{3}$, converges). The Divergence Test is inconclusive for all three, since every term tends to $0$.',
    },
  ],
  takeaways: [
    'Always start with the Divergence Test: $\\lim a_n \\ne 0$ ends the problem; $\\lim a_n = 0$ tells you nothing.',
    'Then look for special forms (geometric, $p$-series, telescoping), which can also give exact sums.',
    'Mixed signs: test $\\sum |a_n|$ first; if it diverges, try the AST to decide conditional convergence.',
    'Factorials and exponentials → Ratio; $n$th powers → Root; algebraic terms → (Limit) Comparison with a $p$-series; easy integrals → Integral Test.',
    'Use the growth hierarchy $\\ln n \\ll n^p \\ll c^n \\ll n! \\ll n^n$ to guess the answer, then prove it with a test whose hypotheses you check.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 5.6 Ratio and Root Tests',
      url: 'https://openstax.org/books/calculus-volume-2/pages/5-6-ratio-and-root-tests',
      source: 'openstax',
      note: 'Ends with a summary table of every convergence test and a set of mixed exercises.',
    },
    {
      title: "Paul's Online Notes — Strategy for Series",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/SeriesStrategy.aspx',
      source: 'paul',
      note: 'A checklist very close to this lesson\'s flowchart, with commentary on when each test is the natural choice.',
    },
    {
      title: 'Khan Academy — Calculus 2',
      url: 'https://www.khanacademy.org/math/calculus-2',
      source: 'khan',
      note: 'The series unit has short videos and practice sets on choosing a convergence test.',
    },
  ],
};
