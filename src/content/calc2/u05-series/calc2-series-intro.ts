import type { GraphBlock, Lesson } from '../../types';

type Pt = NonNullable<GraphBlock['points']>[number];

/**
 * Dots (k, value_k) for k = 1..N that only appear once the slider `m` reaches k.
 * `0*sqrt(m - k)` is 0 when m >= k and undefined (so the dot is hidden) when m < k.
 */
const revealed = (value: (k: number) => number, N: number, color: Pt['color']): Pt[] =>
  Array.from({ length: N }, (_, i) => {
    const k = i + 1;
    return { x: k, y: `${Math.round(value(k) * 1e6) / 1e6} + 0*sqrt(m - ${k})`, color };
  });

const harmonic = (n: number) => {
  let s = 0;
  for (let k = 1; k <= n; k++) s += 1 / k;
  return s;
};

export const lesson: Lesson = {
  id: 'calc2-series-intro',
  title: 'Infinite Series',
  summary: 'What it means to add infinitely many numbers: partial sums, geometric and telescoping series, the harmonic series and the divergence test.',
  minutes: 19,
  objectives: [
    'Define the sum of an infinite series as the limit of its sequence of partial sums',
    'Decide whether a geometric series converges and find its sum, including rewriting it into standard form',
    'Sum a telescoping series by finding a formula for its partial sums',
    'Explain why the harmonic series diverges even though its terms go to $0$',
    'Use the divergence test correctly, knowing what it can and cannot conclude',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Adding infinitely many numbers',
      blocks: [
        {
          type: 'p',
          text: 'Walk halfway to a wall, then half the remaining distance, then half of what is left, forever. The distances are $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\dots$, and common sense says the total is the whole distance, $1$. But nobody can perform infinitely many additions. We need a definition of an infinite sum that uses only things we can actually compute.',
        },
        {
          type: 'p',
          text: 'The trick: add up the first $n$ terms (a finite, honest sum) and watch what happens as $n$ grows. That turns a question about infinitely many terms into a question about the limit of a sequence, which the previous lesson taught you to answer.',
        },
        {
          type: 'definition',
          term: 'Infinite series and partial sums',
          text: 'Given a sequence $\\{a_n\\}$, the [[infinite-series]] $\\sum\\limits_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + \\cdots$ has $n$-th [[partial-sum]] $s_n = a_1 + a_2 + \\cdots + a_n = \\sum\\limits_{k=1}^{n} a_k$. If $\\lim\\limits_{n \\to \\infty} s_n = s$ exists (as a finite number), the series **converges** and its **sum** is $s$. Otherwise it **diverges**.',
        },
        {
          type: 'graph',
          x: [0, 13],
          y: [0, 1.15],
          xStep: 1,
          yStep: 0.25,
          points: [...revealed((k) => 0.5 ** k, 12, 'orange'), ...revealed((k) => 1 - 0.5 ** k, 12, 'blue')],
          hlines: [{ y: 1, label: 'sum = 1', color: 'green' }],
          sliders: [{ name: 'm', min: 1, max: 12, step: 1, value: 4, label: 'number of terms $n$' }],
          readouts: [
            { label: 'newest term $a_n = \\left(\\tfrac{1}{2}\\right)^n =$', expr: '0.5^m', digits: 6 },
            { label: 'partial sum $s_n =$', expr: '1 - 0.5^m', digits: 6 },
          ],
          caption: 'Orange dots are the **terms** $a_n = \\frac{1}{2^n}$, blue dots the **partial sums** $s_n$. Add terms with the slider: the terms shrink to $0$ while the partial sums climb toward $1$. The sum of the series is the limit of the blue dots.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why define the sum this way?',
          text: 'It is the only definition that agrees with ordinary addition for finite sums and can be checked with finitely many steps for any given accuracy: "the sum is $s$" means you can get within any $\\varepsilon$ of $s$ by adding enough terms. It also exposes the danger. Some infinite sums have no sensible value, like $1 - 1 + 1 - 1 + \\cdots$, whose partial sums $1, 0, 1, 0, \\dots$ never settle.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two sequences, do not mix them up',
          text: 'Every series comes with two sequences: the terms $a_n$ (what you add) and the partial sums $s_n$ (running totals). "The series converges" is a statement about $s_n$. In the graph, $a_n \\to 0$ and $s_n \\to 1$: different limits, different questions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'For the series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{3}{10^n} = 0.3 + 0.03 + 0.003 + \\cdots$, find the partial sum $s_4$. Give an exact value.',
      hint: '$s_4$ is the sum of the first four terms only.',
      label: '$s_4 =$',
      answer: '3333/10000',
      answerTex: '0.3333',
      explanation: '$s_4 = 0.3 + 0.03 + 0.003 + 0.0003 = 0.3333$. Each partial sum adds one more $3$ to the decimal, so $s_n = 0.33\\ldots3$ ($n$ threes), and the limit is $0.\\overline{3} = \\frac{1}{3}$. Every repeating decimal is secretly an infinite series.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Geometric series',
      blocks: [
        {
          type: 'p',
          text: 'A [[geometric-series]] multiplies by the same [[common-ratio]] $r$ to get from each term to the next: $a + ar + ar^2 + ar^3 + \\cdots$. It is the one infinite series whose partial sums have a simple closed form, which makes it the benchmark every other series is measured against.',
        },
        {
          type: 'derivation',
          title: 'The partial sum $s_n = a + ar + \\cdots + ar^{n-1}$ (for $r \\ne 1$)',
          steps: [
            { tex: 's_n = a + ar + ar^2 + \\cdots + ar^{n-1}', why: 'The first $n$ terms: exponents run from $0$ to $n - 1$.' },
            { tex: 'r s_n = ar + ar^2 + \\cdots + ar^{n-1} + ar^n', why: 'Multiply every term by $r$. Each term shifts one place to the right.' },
            { tex: 's_n - r s_n = a - ar^n', why: 'Subtract: everything from $ar$ to $ar^{n-1}$ appears in both lines and cancels. Only the first term of $s_n$ and the last term of $rs_n$ survive.' },
            { tex: 's_n = \\frac{a(1 - r^n)}{1 - r}', why: 'Factor $s_n(1 - r)$ on the left and divide by $1 - r$, which is allowed because $r \\ne 1$.' },
          ],
          result: 'Now the infinite sum is a sequence limit, and it depends only on $r^n$, which the previous lesson analysed completely.',
        },
        {
          type: 'theorem',
          name: 'Geometric series test',
          tex: '\\sum_{n=1}^{\\infty} a r^{n-1} = a + ar + ar^2 + \\cdots = \\frac{a}{1 - r} \\quad \\text{if } |r| < 1',
          text: 'If $|r| \\ge 1$ (and $a \\ne 0$) the series diverges. In words: **sum = first term ÷ (1 − ratio)**, valid only when $|r| < 1$.',
        },
        {
          type: 'p',
          text: 'Why? If $|r| < 1$ then $r^n \\to 0$, so $s_n \\to \\frac{a(1 - 0)}{1 - r}$. If $|r| > 1$ or $r = -1$, then $r^n$ has no limit, so neither does $s_n$. If $r = 1$ the series is $a + a + a + \\cdots$, whose partial sums $na$ run off to $\\pm\\infty$.',
        },
        {
          type: 'graph',
          x: [0, 26],
          y: [-2, 6],
          xStep: 5,
          points: Array.from({ length: 25 }, (_, i) => ({ x: i + 1, y: `(1 - r^${i + 1})/(1 - r)` })),
          hlines: [{ y: '1/(1 - r) + 0*sqrt(1 - abs(r))', color: 'green' }],
          sliders: [{ name: 'r', min: -1.15, max: 1.15, step: 0.02, value: 0.75, label: 'ratio $r$' }],
          readouts: [{ label: '$s_{25} =$', expr: '(1 - r^25)/(1 - r)', digits: 5 }, { label: '$\\frac{1}{1-r} =$', expr: '1/(1 - r)', digits: 5 }],
          caption: 'Partial sums of $1 + r + r^2 + \\cdots$. For $|r| < 1$ they approach the green line $y = \\frac{1}{1-r}$; for negative $r$ they zig-zag around it. Push $|r|$ past $1$ and the dots fly off: no green line, no sum.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Total distance of a bouncing ball',
          text: 'A ball dropped from $10$ m that rebounds to $\\frac{3}{4}$ of its height each bounce travels $10 + 2\\left(7.5 + 5.625 + \\cdots\\right) = 10 + 2 \\cdot \\frac{7.5}{1 - 3/4} = 70$ m in total (the factor $2$ counts up and down). Game designers use exactly this sum to predict how far an object with a restitution coefficient will travel before coming to rest.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the sum of $\\displaystyle\\sum_{n=1}^{\\infty} 3\\left(\\frac{2}{5}\\right)^n$.',
      hint: 'Careful: the exponent starts at $n = 1$, so the first term is not $3$. Write out the first term, then use first term ÷ (1 − ratio).',
      answer: '2',
      explanation: 'The first term (at $n = 1$) is $3 \\cdot \\frac{2}{5} = \\frac{6}{5}$ and the ratio is $r = \\frac{2}{5}$, with $|r| < 1$. So the sum is $\\frac{6/5}{1 - 2/5} = \\frac{6/5}{3/5} = 2$. Using $a = 3$ would give $5$, which is the sum starting from $n = 0$: it includes an extra term $3\\left(\\frac{2}{5}\\right)^0 = 3$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Geometric series in disguise',
      blocks: [
        {
          type: 'p',
          text: 'Real problems rarely arrive in the form $\\sum ar^{n-1}$. The reliable method: **write out the first term, then divide the second term by the first to get $r$.** Check that every term really is $r$ times the previous one (exponents that are linear in $n$ guarantee it).',
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{2^{2n}}{3^{n-1}}$ converge?',
          steps: [
            { tex: '\\frac{2^{2n}}{3^{n-1}} = \\frac{4^n}{3^{n-1}}', why: 'Rewrite $2^{2n} = (2^2)^n = 4^n$ so each power has a single base.' },
            { tex: '= 4 \\cdot \\frac{4^{n-1}}{3^{n-1}} = 4\\left(\\frac{4}{3}\\right)^{n-1}', why: 'Split off one factor of $4$ so the exponents match: $4^n = 4 \\cdot 4^{n-1}$.' },
            { tex: 'a = 4, \\quad r = \\frac{4}{3}', why: 'Now it is in standard form $a r^{n-1}$.' },
            { tex: '|r| = \\frac{4}{3} \\ge 1 \\implies \\text{diverges}', why: 'The geometric series test: the ratio is too big, the terms grow, and the partial sums go to $\\infty$.' },
          ],
          result: 'The series diverges. (Without the rewrite, the $2^{2n}$ makes the ratio easy to misjudge as $\\frac{2}{3}$.)',
        },
        {
          type: 'derivation',
          title: 'Write $0.\\overline{72} = 0.727272\\ldots$ as a fraction',
          steps: [
            { tex: '0.\\overline{72} = \\frac{72}{100} + \\frac{72}{100^2} + \\frac{72}{100^3} + \\cdots', why: 'Each block of two digits is a term; each block sits two decimal places further right, i.e. is divided by $100$.' },
            { tex: 'a = \\frac{72}{100}, \\quad r = \\frac{1}{100}', why: 'First term and ratio; $|r| < 1$, so the series converges.' },
            { tex: '= \\frac{72/100}{1 - 1/100} = \\frac{72/100}{99/100} = \\frac{72}{99}', why: 'First term ÷ (1 − ratio); the $100$s cancel.' },
            { tex: '= \\frac{8}{11}', why: 'Reduce by the common factor $9$.' },
          ],
          result: '$0.\\overline{72} = \\frac{8}{11}$. (Check: $8 \\div 11 = 0.7272\\ldots$) The same argument proves $0.\\overline{9} = \\frac{9/10}{1 - 1/10} = 1$ exactly.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors love geometric series that start at $n = 0$, $n = 1$ or $n = 2$, or that hide the ratio inside powers like $2^{2n}$ or $3^{1-n}$. Always compute the first term by plugging in the starting index. Writing "$a = \\ldots$, $r = \\ldots$, $|r| < 1$, so sum $= \\ldots$" earns full marks; quoting the formula without checking $|r| < 1$ often does not.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Write the repeating decimal $0.\\overline{36} = 0.363636\\ldots$ as a fraction in lowest terms.',
      hint: 'First term $\\frac{36}{100}$, ratio $\\frac{1}{100}$.',
      answer: '4/11',
      answerTex: '\\frac{4}{11}',
      explanation: '$0.\\overline{36} = \\frac{36}{100} + \\frac{36}{100^2} + \\cdots$ is geometric with $a = \\frac{36}{100}$ and $r = \\frac{1}{100}$. Its sum is $\\frac{36/100}{99/100} = \\frac{36}{99} = \\frac{4}{11}$ after dividing top and bottom by $9$. Check: $4 \\div 11 = 0.3636\\ldots$',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Telescoping series',
      blocks: [
        {
          type: 'p',
          text: 'A [[telescoping-series]] is one whose partial sums collapse, like a folding telescope, because each term cancels part of the next. The tool that reveals the cancellation is usually [[partial-fractions]].',
        },
        {
          type: 'derivation',
          title: 'Find $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$',
          steps: [
            { tex: '\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}', why: 'Partial fractions. Check by combining: $\\frac{(n+1) - n}{n(n+1)} = \\frac{1}{n(n+1)}$.' },
            { tex: 's_n = \\left(1 - \\tfrac{1}{2}\\right) + \\left(\\tfrac{1}{2} - \\tfrac{1}{3}\\right) + \\cdots + \\left(\\tfrac{1}{n} - \\tfrac{1}{n+1}\\right)', why: 'Write out the **finite** partial sum, so that regrouping is ordinary algebra.' },
            { tex: 's_n = 1 - \\frac{1}{n+1}', why: 'Every $-\\frac{1}{k}$ cancels the $+\\frac{1}{k}$ in the next bracket. Only the very first and very last pieces survive.' },
            { tex: '\\lim_{n \\to \\infty} s_n = 1 - 0 = 1', why: 'The sum of the series is, by definition, the limit of the partial sums.' },
          ],
          result: '$\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = 1$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Cancel inside a partial sum, never in the infinite sum',
          text: 'Regrouping an infinite sum can create nonsense. Group $1 - 1 + 1 - 1 + \\cdots$ as $(1 - 1) + (1 - 1) + \\cdots$ and you "get" $0$; group it as $1 + (-1 + 1) + \\cdots$ and you "get" $1$. Both are wrong, because the series diverges. Working with the finite $s_n$, as above, keeps every step legal.',
        },
        {
          type: 'p',
          text: 'When the two pieces are further apart, such as $\\frac{1}{n} - \\frac{1}{n+2}$, the cancellation skips a term, so **two** pieces survive at the start and two at the end. Write out four or five brackets to see exactly which ones remain.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Find the sum of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n(n+2)}$.',
      hint: '$\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$. Write out several brackets: which positive pieces never get cancelled?',
      answer: '3/4',
      answerTex: '\\frac{3}{4}',
      explanation: 'Partial fractions give $\\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$. In $s_n$, each $-\\frac{1}{k}$ cancels the $+\\frac{1}{k}$ two brackets later, leaving $s_n = \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}\\right)$. As $n \\to \\infty$ the last two pieces vanish, so the sum is $\\frac{1}{2} \\cdot \\frac{3}{2} = \\frac{3}{4}$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The harmonic series diverges',
      blocks: [
        {
          type: 'p',
          text: 'The [[harmonic-series]] $\\sum\\limits_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$ has terms that shrink to $0$. Surely it converges? It does not. Its partial sums grow without bound, just extremely slowly.',
        },
        {
          type: 'derivation',
          title: 'Oresme\'s grouping proof (about 1350)',
          steps: [
            { tex: 's_{2} = 1 + \\tfrac{1}{2}', why: 'The first two terms.' },
            { tex: 's_{4} = 1 + \\tfrac{1}{2} + \\left(\\tfrac{1}{3} + \\tfrac{1}{4}\\right) > 1 + \\tfrac{1}{2} + \\left(\\tfrac{1}{4} + \\tfrac{1}{4}\\right) = 1 + \\tfrac{2}{2}', why: 'Replace each term in the bracket by the smallest one, $\\frac{1}{4}$. That makes the bracket smaller, so the inequality is $>$.' },
            { tex: 's_{8} > 1 + \\tfrac{2}{2} + \\left(\\tfrac{1}{5} + \\tfrac{1}{6} + \\tfrac{1}{7} + \\tfrac{1}{8}\\right) > 1 + \\tfrac{2}{2} + 4 \\cdot \\tfrac{1}{8} = 1 + \\tfrac{3}{2}', why: 'The next group has $4$ terms, each at least $\\frac{1}{8}$: the group adds more than $\\frac{1}{2}$.' },
            { tex: 's_{2^k} > 1 + \\frac{k}{2}', why: 'The pattern continues: the group from $\\frac{1}{2^{j-1}+1}$ to $\\frac{1}{2^j}$ has $2^{j-1}$ terms, each at least $\\frac{1}{2^j}$, so it contributes more than $\\frac{1}{2}$.' },
            { tex: '\\lim_{k \\to \\infty} \\left(1 + \\frac{k}{2}\\right) = \\infty \\implies s_n \\to \\infty', why: 'The partial sums are increasing and exceed every bound, so they have no finite limit.' },
          ],
          result: 'The harmonic series diverges: infinitely many halves hide inside it.',
        },
        {
          type: 'graph',
          x: [0, 61],
          y: [0, 5],
          xStep: 5,
          points: Array.from({ length: 60 }, (_, i) => ({ x: i + 1, y: Math.round(harmonic(i + 1) * 1e6) / 1e6 })),
          functions: [{ expr: 'ln(x) + 0.5772', label: '$y = \\ln x + 0.5772$', color: 'green', dashed: true, domain: [0.5, 61] }],
          caption: 'The harmonic partial sums $s_n$ hug the curve $\\ln n + 0.5772\\ldots$. A logarithm grows without bound, but so slowly that you need about $12{,}367$ terms just to pass $10$.',
        },
        {
          type: 'table',
          headers: ['$n$', '$10$', '$100$', '$1000$', '$10^6$'],
          rows: [['$s_n$', '$2.929$', '$5.187$', '$7.485$', '$14.393$']],
          caption: 'Multiplying the number of terms by $10$ adds only about $\\ln 10 \\approx 2.3$ to the sum.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A computer will tell you it converges',
          text: 'Sum the harmonic series in single-precision `float` and the total gets stuck. Once $\\frac{1}{n}$ is smaller than half the gap between neighbouring floats near the running total, adding it changes nothing. A program cannot prove convergence by watching numbers stop changing.',
        },
        {
          type: 'code',
          title: 'harmonic.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    float sum = 0.0f;
    long n = 1;
    while (true) {
        float next = sum + 1.0f / n;
        if (next == sum) break;   // adding 1/n no longer changes the float
        sum = next;
        ++n;
    }
    std::printf("float sum stops growing at n = %ld\\n", n);
    std::printf("sum = %.6f\\n", sum);
}`,
          output: `float sum stops growing at n = 2097152
sum = 15.403683`,
          annotations: [
            { lines: 4, text: 'A 32-bit float carries only about 7 significant digits.' },
            { lines: '7-8', text: 'Near $15.4$, neighbouring floats are about $9.5 \\times 10^{-7}$ apart, so once $\\frac{1}{n}$ is below half that gap the sum rounds back to itself.' },
            { lines: 12, text: '$n = 2^{21}$. The true partial sum keeps growing forever; the float sum is frozen.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'If $\\lim\\limits_{n \\to \\infty} a_n = 0$, then the series $\\sum a_n$ converges.',
      answer: false,
      explanation: 'False. The harmonic series is the counterexample: $\\frac{1}{n} \\to 0$, yet $\\sum \\frac{1}{n}$ diverges. Terms going to $0$ is *necessary* for convergence (the next card proves this) but nowhere near *sufficient*. How fast the terms shrink is what matters.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The divergence test',
      blocks: [
        {
          type: 'p',
          text: 'Although small terms do not guarantee convergence, **large** terms guarantee divergence. If you keep adding numbers that do not shrink to $0$, the running total cannot settle.',
        },
        {
          type: 'theorem',
          name: 'If a series converges, its terms go to 0',
          text: 'If $\\sum a_n$ converges, then $\\lim\\limits_{n \\to \\infty} a_n = 0$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why: one term is the difference of two partial sums',
          text: 'Each term is $a_n = s_n - s_{n-1}$. If the series converges to $s$, then both $s_n \\to s$ and $s_{n-1} \\to s$ (it is the same sequence, shifted by one). So $a_n \\to s - s = 0$.',
        },
        {
          type: 'theorem',
          name: 'Divergence test (the contrapositive)',
          text: 'If $\\lim\\limits_{n \\to \\infty} a_n \\ne 0$, or the limit does not exist, then $\\sum a_n$ **diverges**. If $\\lim a_n = 0$, the test is **inconclusive**: the series might converge or diverge.',
        },
        {
          type: 'derivation',
          title: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^2}{5n^2 + 4}$ converge?',
          steps: [
            { tex: '\\lim_{n \\to \\infty} \\frac{n^2}{5n^2 + 4} = \\lim_{n \\to \\infty} \\frac{1}{5 + 4/n^2}', why: 'Divide top and bottom by $n^2$.' },
            { tex: '= \\frac{1}{5} \\ne 0', why: 'Since $\\frac{4}{n^2} \\to 0$.' },
            { tex: '\\implies \\sum_{n=1}^{\\infty} \\frac{n^2}{5n^2 + 4} \\text{ diverges}', why: 'Divergence test: far out, we keep adding about $\\frac{1}{5}$ each time, so $s_n \\to \\infty$.' },
          ],
          result: 'Diverges by the divergence test. Always try this test first: it takes one limit.',
        },
        {
          type: 'p',
          text: 'Convergent series also obey simple algebra. If $\\sum a_n = A$ and $\\sum b_n = B$, then $\\sum (a_n \\pm b_n) = A \\pm B$ and $\\sum c\\,a_n = cA$. A convergent series plus a divergent series always diverges. So $\\sum \\left(\\frac{1}{2^n} + \\frac{1}{n}\\right)$ diverges, while $\\sum \\left(\\frac{3}{2^n} - \\frac{1}{n(n+1)}\\right) = 3 - 1 = 2$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The divergence test can never prove convergence',
          text: 'Writing "$a_n \\to 0$, so the series converges by the divergence test" is the most common mistake in this whole unit, and instructors mark it wrong every time. When $a_n \\to 0$, you need a different test: the integral, comparison, ratio or alternating series tests coming up in this unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'What does the divergence test tell you about $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$?',
      options: [
        {
          text: 'The series converges, because $\\frac{1}{\\sqrt{n}} \\to 0$',
          why: 'This is the classic misuse. A limit of $0$ makes the divergence test inconclusive; it never proves convergence.',
        },
        {
          text: 'The series diverges, because $\\frac{1}{\\sqrt{n}} \\to 0$',
          why: 'The divergence test concludes divergence only when the terms do **not** go to $0$.',
        },
        {
          text: 'Nothing: the test is inconclusive',
          correct: true,
          why: 'Correct. The terms go to $0$, which is consistent with both convergence and divergence. Another test is needed (it turns out to diverge, as you will see with $p$-series next lesson).',
        },
        {
          text: 'The series diverges, because $\\sqrt{n} \\to \\infty$',
          why: 'The test looks at the terms $a_n = \\frac{1}{\\sqrt{n}}$, not at $\\sqrt{n}$. The terms shrink to $0$.',
        },
      ],
      explanation: 'The divergence test has only two outcomes: "diverges" (when $a_n \\not\\to 0$) or "no information" (when $a_n \\to 0$). Here $\\lim \\frac{1}{\\sqrt{n}} = 0$, so we learn nothing. In fact $\\frac{1}{\\sqrt{n}} \\ge \\frac{1}{n}$, and its partial sums outgrow the harmonic series, so it diverges, but proving that takes the tools of the next two lessons.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student sums $\\displaystyle\\sum_{n=1}^{\\infty} \\left(\\frac{2}{3}\\right)^n$. Tap the first line that is wrong.',
      lines: [
        'The ratio between consecutive terms is $r = \\frac{2}{3}$',
        'Since $|r| = \\frac{2}{3} < 1$, the series converges',
        'The first term is $a = \\left(\\frac{2}{3}\\right)^0 = 1$',
        'So the sum is $\\dfrac{a}{1 - r} = \\dfrac{1}{1 - 2/3} = 3$',
      ],
      errorLines: [3],
      explanation: 'The series starts at $n = 1$, so its first term is $\\left(\\frac{2}{3}\\right)^1 = \\frac{2}{3}$, not $1$. The student summed $\\sum_{n=0}^{\\infty}$, which includes an extra term. Correctly: $\\frac{2/3}{1 - 2/3} = \\frac{2/3}{1/3} = 2$. (Check: $3 - 1 = 2$, the student\'s total minus the extra $n = 0$ term.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Summarise the two main facts of this lesson.',
      template: 'A geometric series with ratio $r$ converges exactly when ___. If $\\lim a_n \\ne 0$, then $\\sum a_n$ ___.',
      blanks: [{ answers: ['$|r| < 1$'] }, { answers: ['diverges'] }],
      wordBank: ['$|r| < 1$', '$|r| \\le 1$', '$r < 1$', 'diverges', 'converges', 'may converge or diverge'],
      explanation: 'Geometric series need $|r| < 1$ strictly: at $r = 1$ the terms are constant, and at $r = -1$ the partial sums flip between two values; $r < 1$ would wrongly include $r = -3$. And terms that do not shrink to $0$ always force divergence; that is the divergence test. (Terms that *do* shrink to $0$ leave the question open.)',
    },
  ],
  takeaways: [
    'The sum of $\\sum a_n$ is defined as $\\lim s_n$, the limit of the partial sums $s_n = a_1 + \\cdots + a_n$; the series converges if that limit is finite.',
    'Geometric series: $\\sum_{n=1}^{\\infty} ar^{n-1} = \\frac{a}{1 - r}$ when $|r| < 1$ and diverges when $|r| \\ge 1$. Always find the first term from the starting index.',
    'Telescoping series: find a formula for the finite partial sum $s_n$ (usually via partial fractions), then take its limit.',
    'The harmonic series $\\sum \\frac{1}{n}$ diverges, even though $\\frac{1}{n} \\to 0$; its partial sums grow like $\\ln n$.',
    'Divergence test: if $a_n \\not\\to 0$, the series diverges. If $a_n \\to 0$, the test says nothing.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 5.2 Infinite Series',
      url: 'https://openstax.org/books/calculus-volume-2/pages/5-2-infinite-series',
      source: 'openstax',
      note: 'Partial sums, geometric and telescoping series, and the harmonic series, with many exercises.',
    },
    {
      title: "Paul's Online Notes — Series: The Basics",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/Series_Basics.aspx',
      source: 'paul',
      note: 'A careful look at partial sums and why the sum is defined as a limit.',
    },
    {
      title: "Paul's Online Notes — Special Series",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/Series_Special.aspx',
      source: 'paul',
      note: 'Geometric, telescoping and harmonic series worked in detail.',
    },
    {
      title: 'Wikipedia — Harmonic series (mathematics)',
      url: 'https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)',
      source: 'wikipedia',
      note: 'Several different proofs of divergence and the surprising applications, such as the block-stacking problem.',
    },
  ],
};
