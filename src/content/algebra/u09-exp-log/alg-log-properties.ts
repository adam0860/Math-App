import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-log-properties',
  title: 'Properties of Logarithms',
  summary: 'Logs turn multiplication into addition and powers into multiplication. Learn the three rules, why they work, and the change-of-base formula.',
  minutes: 17,
  objectives: [
    'State and prove the product, quotient and power rules for logarithms',
    'Expand a single logarithm into a sum and difference of simpler logs',
    'Condense a combination of logs into a single logarithm',
    'Avoid the classic false "rules" such as $\\log(M + N) = \\log M + \\log N$',
    'Use the change-of-base formula to evaluate any logarithm with a calculator',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The product rule: logs turn × into +',
      blocks: [
        {
          type: 'p',
          text: 'Exponents have a famous rule: when you multiply powers of the same base, you **add** the exponents, $b^m \\cdot b^n = b^{m+n}$. A [[logarithm]] *is* an exponent, so that rule must show up in log form too. It does, and it is the most important property of logs.',
        },
        {
          type: 'theorem',
          name: 'Product rule',
          tex: '\\log_b(MN) = \\log_b M + \\log_b N \\qquad (M, N > 0)',
          text: 'The log of a product is the sum of the logs.',
        },
        {
          type: 'derivation',
          title: 'Why the product rule is true',
          steps: [
            { tex: 'm = \\log_b M, \\quad n = \\log_b N', why: 'Give the two logs names. They are just numbers (exponents).' },
            { tex: 'M = b^m, \\quad N = b^n', why: 'Convert each to exponential form, using the definition of the logarithm.' },
            { tex: 'MN = b^m \\cdot b^n = b^{m+n}', why: 'Multiply, then use the exponent rule: same base, add exponents.' },
            { tex: '\\log_b(MN) = m + n', why: 'Convert $MN = b^{m+n}$ back to log form: the exponent that produces $MN$ is $m + n$.' },
            { tex: '= \\log_b M + \\log_b N', why: 'Substitute back what $m$ and $n$ stand for.' },
          ],
          result: 'The product rule is nothing more than "add exponents when multiplying" written in log language.',
        },
        {
          type: 'p',
          text: 'Quick check with numbers: $\\log_2 32 = \\log_2(4 \\cdot 8) = \\log_2 4 + \\log_2 8 = 2 + 3 = 5$, and indeed $2^5 = 32$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Why logs were invented',
          text: 'In 1614 John Napier published logarithms to save astronomers from multiplying huge numbers by hand. Look up $\\log M$ and $\\log N$ in a table, **add** them, and look up the answer backwards. For 350 years the slide rule — two log scales sliding past each other — did multiplication this way, all the way through the Apollo program.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'There is no rule for $\\log(M + N)$',
          text: 'The product rule is about the log of a **product**. The log of a **sum** does not split: $\\log(M + N) \\ne \\log M + \\log N$. Test it: $\\log(10 + 10) = \\log 20 \\approx 1.30$, but $\\log 10 + \\log 10 = 2$.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'For all positive $x$ and $y$, $\\ln(x + y) = \\ln x + \\ln y$.',
      answer: false,
      explanation: 'The product rule says $\\ln(xy) = \\ln x + \\ln y$ — a **product** inside. A sum inside a log cannot be split. Counterexample: $x = y = 1$ gives $\\ln 2 \\approx 0.693$ on the left and $\\ln 1 + \\ln 1 = 0$ on the right.',
    },
    {
      kind: 'concept',
      title: 'The quotient and power rules',
      blocks: [
        {
          type: 'p',
          text: 'Dividing powers subtracts exponents, and raising a power to a power multiplies them. Each gives a log rule in exactly the same way the product rule came from adding exponents.',
        },
        {
          type: 'table',
          headers: ['Exponent rule', 'Log rule', 'Name'],
          rows: [
            ['$b^m \\cdot b^n = b^{m+n}$', '$\\log_b(MN) = \\log_b M + \\log_b N$', 'product rule'],
            ['$\\dfrac{b^m}{b^n} = b^{m-n}$', '$\\log_b\\!\\left(\\dfrac{M}{N}\\right) = \\log_b M - \\log_b N$', 'quotient rule'],
            ['$(b^m)^p = b^{mp}$', '$\\log_b(M^p) = p \\log_b M$', 'power rule'],
          ],
          caption: 'Valid for $b > 0$, $b \\ne 1$, $M > 0$, $N > 0$ and any real $p$.',
        },
        {
          type: 'derivation',
          title: 'Why the power rule is true',
          steps: [
            { tex: 'm = \\log_b M \\implies M = b^m', why: 'Name the log and convert to exponential form.' },
            { tex: 'M^p = (b^m)^p = b^{mp}', why: 'Raise both sides to the $p$th power; a power of a power multiplies exponents.' },
            { tex: '\\log_b(M^p) = mp', why: 'Convert back: the exponent that turns $b$ into $M^p$ is $mp$.' },
            { tex: '= p \\log_b M', why: 'Substitute $m = \\log_b M$ and write the constant first.' },
          ],
          result: 'An exponent **inside** a log can be brought out front as a multiplier.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the power rule is the star',
          text: 'The power rule is what lets logs solve equations: it pulls an unknown **out of an exponent** and down to the ground floor, where ordinary algebra works. $\\ln(5^x) = x \\ln 5$ turns an exponential equation into a linear one. You will use this constantly in the next lesson.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['\\dfrac{\\log M}{\\log N} = \\log M - \\log N', '(\\log M)^2 = 2 \\log M'],
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['\\log\\!\\left(\\dfrac{M}{N}\\right) = \\log M - \\log N', '\\log(M^2) = 2 \\log M'],
          },
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\log_2 48 - \\log_2 3$ without a calculator.',
      hint: 'A difference of logs with the same base is the log of a quotient.',
      answer: '4',
      explanation: 'By the quotient rule, $\\log_2 48 - \\log_2 3 = \\log_2 \\frac{48}{3} = \\log_2 16 = 4$, since $2^4 = 16$. Neither $\\log_2 48$ nor $\\log_2 3$ is a nice number on its own, but their difference is.',
    },
    {
      kind: 'concept',
      title: 'Expanding a logarithm',
      blocks: [
        {
          type: 'p',
          text: '**Expanding** means using the rules to break one complicated log into a sum and difference of simple logs. Work from the outside in: quotients first, then products, then powers. Rewrite roots as fractional exponents so the power rule can handle them.',
        },
        {
          type: 'derivation',
          title: 'Expand $\\log\\!\\left(\\dfrac{x^3 \\sqrt{y}}{z^2}\\right)$ for $x, y, z > 0$',
          steps: [
            { tex: '= \\log(x^3 \\sqrt{y}) - \\log(z^2)', why: 'Quotient rule: log of the numerator minus log of the denominator.' },
            { tex: '= \\log(x^3) + \\log(\\sqrt{y}) - \\log(z^2)', why: 'Product rule on the numerator.' },
            { tex: '= \\log(x^3) + \\log\\!\\left(y^{1/2}\\right) - \\log(z^2)', why: 'A square root is the power $\\frac12$.' },
            { tex: '= 3\\log x + \\tfrac{1}{2}\\log y - 2\\log z', why: 'Power rule on each term: bring the exponents down front.' },
          ],
          result: '$\\log\\!\\left(\\dfrac{x^3\\sqrt{y}}{z^2}\\right) = 3\\log x + \\frac12 \\log y - 2 \\log z$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Using known logs as building blocks',
          text: 'If you know $\\log_b 2$ and $\\log_b 3$, you know the log of every number built from $2$s and $3$s: $\\log_b 12 = \\log_b(2^2 \\cdot 3) = 2\\log_b 2 + \\log_b 3$. Before calculators, log tables only needed the logs of primes; everything else followed from these rules.',
        },
        {
          type: 'heading',
          text: 'A domain subtlety',
        },
        {
          type: 'p',
          text: 'The rules assume every log involved is defined. $\\ln(x^2)$ is defined for every $x \\ne 0$, but $2\\ln x$ only for $x > 0$. So $\\ln(x^2) = 2\\ln x$ holds only for $x > 0$. The version valid for all $x \\ne 0$ is $\\ln(x^2) = 2\\ln|x|$.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 3],
          functions: [
            { expr: 'ln(x^2)', label: '$y = \\ln(x^2)$', color: 'blue' },
            { expr: '2ln(x)', label: '$y = 2\\ln x$', color: 'red', dashed: true, domain: [0.01, 4] },
          ],
          vlines: [{ x: 0, label: 'x = 0' }],
          caption: 'On the right the two curves coincide. On the left, only $\\ln(x^2)$ exists: rewriting it as $2\\ln x$ would silently delete half of its graph.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Expand $\\ln\\!\\left(\\dfrac{x^2 y}{z}\\right)$, where $x, y, z > 0$.',
      options: [
        { text: '$2\\ln x + \\ln y - \\ln z$', correct: true, why: 'Quotient rule, then product rule, then power rule on $x^2$.' },
        { text: '$2\\ln x \\cdot \\ln y - \\ln z$', why: 'The product rule turns a product into a **sum** of logs, not a product of logs.' },
        { text: '$\\dfrac{2\\ln x + \\ln y}{\\ln z}$', why: 'The quotient rule gives a **difference** of logs, not a quotient of logs.' },
        { text: '$(\\ln x)^2 + \\ln y - \\ln z$', why: 'The power rule brings the exponent to the front as a multiplier: $\\ln(x^2) = 2\\ln x$, not $(\\ln x)^2$.' },
      ],
      explanation: '$\\ln\\frac{x^2 y}{z} = \\ln(x^2 y) - \\ln z = \\ln(x^2) + \\ln y - \\ln z = 2\\ln x + \\ln y - \\ln z$. Each rule turns an operation into a simpler one: products into sums, quotients into differences, powers into multiples.',
    },
    {
      kind: 'numeric',
      prompt: 'Given $\\log_7 2 \\approx 0.3562$ and $\\log_7 3 \\approx 0.5646$, approximate $\\log_7 12$.',
      hint: 'Write $12 = 2^2 \\cdot 3$.',
      label: '$\\log_7 12 \\approx$',
      answer: '1.2770',
      tolerance: 0.002,
      explanation: '$\\log_7 12 = \\log_7(2^2 \\cdot 3) = 2\\log_7 2 + \\log_7 3 \\approx 2(0.3562) + 0.5646 = 1.2770$. Check: $7^{1.277} \\approx 12.0$. ✓',
    },
    {
      kind: 'concept',
      title: 'Condensing into a single logarithm',
      blocks: [
        {
          type: 'p',
          text: '**Condensing** runs the rules backwards: combine a sum and difference of logs into one log. This is the move you need when solving log equations, because a single log can be converted to exponential form.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Powers first', text: 'Move every coefficient inside as an exponent: $p\\log_b M = \\log_b(M^p)$. The coefficient must be exactly $1$ before you combine.' },
            { title: 'Plus signs go to the top', text: 'Logs being added are multiplied together in the numerator.' },
            { title: 'Minus signs go to the bottom', text: 'Logs being subtracted are multiplied together in the denominator.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Condense $2\\ln x + 3\\ln y - \\ln z$',
          steps: [
            { tex: '= \\ln(x^2) + \\ln(y^3) - \\ln z', why: 'Power rule backwards: coefficients become exponents.' },
            { tex: '= \\ln(x^2 y^3) - \\ln z', why: 'Product rule backwards: a sum of logs is the log of the product.' },
            { tex: '= \\ln\\!\\left(\\dfrac{x^2 y^3}{z}\\right)', why: 'Quotient rule backwards: subtracting a log divides by its argument.' },
          ],
          result: '$2\\ln x + 3\\ln y - \\ln z = \\ln\\!\\left(\\dfrac{x^2 y^3}{z}\\right)$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Watch every minus sign',
          text: 'In $\\ln a - \\ln b + \\ln c$, only $b$ goes in the denominator: the result is $\\ln\\frac{ac}{b}$, not $\\ln\\frac{a}{bc}$. The minus sign belongs to $\\ln b$ alone. If you want a denominator of $bc$, you need $\\ln a - (\\ln b + \\ln c)$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Log-space arithmetic',
          text: 'Probabilities in machine learning and speech recognition are often products of thousands of tiny numbers, which underflow to `0.0` in floating point. Programs instead store $\\ln p$ and **add** logs, using $\\ln(p_1 p_2 \\cdots p_n) = \\ln p_1 + \\ln p_2 + \\cdots + \\ln p_n$. That is the product rule keeping your code numerically stable.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student condenses $3\\log x - \\log y + \\log z$. Tap the first incorrect line.',
      lines: [
        '$3\\log x - \\log y + \\log z$',
        '$= \\log(x^3) - \\log y + \\log z$',
        '$= \\log(x^3) - \\log(yz)$',
        '$= \\log\\!\\left(\\dfrac{x^3}{yz}\\right)$',
      ],
      errorLines: [3],
      explanation: 'Line 3 treats $-\\log y + \\log z$ as $-(\\log y + \\log z)$, quietly changing the sign of $\\log z$. Only $\\log y$ is subtracted, so $z$ belongs in the numerator: $\\log(x^3) + \\log z - \\log y = \\log\\!\\left(\\dfrac{x^3 z}{y}\\right)$.',
    },
    {
      kind: 'expr',
      prompt: 'Write $2\\ln x - \\ln(x + 1) + \\ln 3$ as a single natural logarithm (assume $x > 0$).',
      hint: 'Powers first: $2\\ln x = \\ln(x^2)$. Then additions multiply in the numerator, the subtraction divides.',
      label: '$=$',
      answer: 'ln(3x^2/(x + 1))',
      answerTex: '\\ln\\!\\left(\\dfrac{3x^2}{x + 1}\\right)',
      domain: [0.5, 3],
      explanation: '$2\\ln x = \\ln(x^2)$. The terms being added, $\\ln(x^2)$ and $\\ln 3$, combine to $\\ln(3x^2)$. Subtracting $\\ln(x+1)$ puts $x + 1$ in the denominator: $\\ln\\!\\left(\\dfrac{3x^2}{x+1}\\right)$. Note that $\\ln(x + 1)$ cannot be split further — it is the log of a sum.',
    },
    {
      kind: 'concept',
      title: 'Change of base',
      blocks: [
        {
          type: 'p',
          text: 'Your calculator has only $\\log$ and $\\ln$ keys. How do you find $\\log_5 40$? Since $5^2 = 25$ and $5^3 = 125$, the answer is between $2$ and $3$, but to get decimals you need a way to rewrite any base in terms of one your calculator knows. That is the [[change-of-base|change-of-base formula]].',
        },
        {
          type: 'theorem',
          name: 'Change-of-base formula',
          tex: '\\log_b x = \\frac{\\ln x}{\\ln b} = \\frac{\\log x}{\\log b}',
          text: 'Any base works in the new fraction, as long as the top and bottom use the same one.',
        },
        {
          type: 'derivation',
          title: 'Derive the formula, then evaluate $\\log_5 40$',
          steps: [
            { tex: 'y = \\log_b x \\iff b^y = x', why: 'Name the log and convert to exponential form.' },
            { tex: '\\ln(b^y) = \\ln x', why: 'Take $\\ln$ of both sides. Equal positive numbers have equal logs.' },
            { tex: 'y \\ln b = \\ln x', why: 'Power rule: the unknown exponent $y$ comes down front.' },
            { tex: 'y = \\frac{\\ln x}{\\ln b}', why: 'Divide by $\\ln b$, which is not $0$ because $b \\ne 1$.' },
            { tex: '\\log_5 40 = \\frac{\\ln 40}{\\ln 5} \\approx \\frac{3.6889}{1.6094} \\approx 2.292', why: 'Apply the formula with $b = 5$, $x = 40$.' },
          ],
          result: '$\\log_5 40 \\approx 2.292$, between $2$ and $3$ as predicted. Check: $5^{2.292} \\approx 40$. ✓',
        },
        {
          type: 'p',
          text: 'The formula also says something striking: $\\log_b x = \\frac{1}{\\ln b} \\cdot \\ln x$. **Every log function is a constant multiple of every other one.** Their graphs are vertical stretches of each other.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-3, 4],
          functions: [
            { expr: 'ln(x)', label: '$y = \\ln x$', color: 'gray', dashed: true, domain: [0.01, 10] },
            { expr: 'ln(x)/ln(b)', label: '$y = \\log_b x = \\frac{\\ln x}{\\ln b}$', color: 'blue', domain: [0.01, 10] },
          ],
          points: [{ x: 1, y: 0, label: '(1, 0)' }],
          sliders: [{ name: 'b', min: 1.5, max: 10, step: 0.1, value: 2, label: '$b$' }],
          readouts: [{ label: 'stretch factor $\\frac{1}{\\ln b} \\approx$', expr: '1/ln(b)', digits: 4 }],
          caption: 'Changing the base just rescales the curve vertically. Every log curve passes through $(1, 0)$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why big-O ignores the log base',
          text: 'Since $\\log_2 n = \\frac{\\ln n}{\\ln 2} \\approx 1.443 \\ln n$, switching bases only multiplies by a constant — and big-O notation ignores constant factors. That is why we write $O(\\log n)$ without a base. In code, `std::log(x) / std::log(b)` computes $\\log_b x$ (C++ also has `std::log2` and `std::log10` built in).',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use the change-of-base formula to evaluate $\\log_3 100$. Give an exact expression like `ln(100)/ln(3)` or a decimal to at least 3 places.',
      hint: '$\\log_3 100 = \\frac{\\ln 100}{\\ln 3}$. Sanity check: $3^4 = 81$ and $3^5 = 243$.',
      label: '$\\log_3 100 =$',
      answer: 'ln(100)/ln(3)',
      answerTex: '\\frac{\\ln 100}{\\ln 3} \\approx 4.192',
      minDecimals: 3,
      explanation: '$\\log_3 100 = \\dfrac{\\ln 100}{\\ln 3} \\approx \\dfrac{4.6052}{1.0986} \\approx 4.192$ (using common logs, $\\frac{2}{0.4771}$ gives the same thing). It sits between $4$ and $5$ because $3^4 = 81 < 100 < 243 = 3^5$.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps of the change-of-base proof in order.',
      lines: [
        'Let $y = \\log_b x$, so $b^y = x$.',
        'Take the natural log of both sides: $\\ln(b^y) = \\ln x$.',
        'Apply the power rule: $y \\ln b = \\ln x$.',
        'Divide by $\\ln b$: $y = \\dfrac{\\ln x}{\\ln b}$.',
      ],
      distractors: ['Apply the product rule: $\\ln b + \\ln y = \\ln x$.'],
      explanation: 'First convert to exponential form so the unknown is an exponent; then take a log of both sides; the power rule brings $y$ down; finally divide. The distractor misuses the product rule — $b^y$ is a power, not a product $b \\cdot y$.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the three rules (all logs base $b$, with $M, N > 0$).',
      template: '$\\log_b(MN) =$ ___ , $\\log_b\\!\\left(\\frac{M}{N}\\right) =$ ___ , and $\\log_b(M^p) =$ ___ .',
      blanks: [{ answers: ['$\\log_b M + \\log_b N$'] }, { answers: ['$\\log_b M - \\log_b N$'] }, { answers: ['$p\\log_b M$'] }],
      wordBank: [
        '$\\log_b M + \\log_b N$',
        '$\\log_b M - \\log_b N$',
        '$p\\log_b M$',
        '$\\log_b M \\cdot \\log_b N$',
        '$\\dfrac{\\log_b M}{\\log_b N}$',
        '$(\\log_b M)^p$',
      ],
      explanation: 'Each log rule mirrors an exponent rule: multiplying powers adds exponents (product → sum), dividing subtracts (quotient → difference), and a power of a power multiplies (exponent → coefficient). The distractors — product of logs, quotient of logs, power of a log — are the most common invented "rules".',
    },
  ],
  takeaways: [
    'Product rule: $\\log_b(MN) = \\log_b M + \\log_b N$. Quotient rule: $\\log_b\\frac{M}{N} = \\log_b M - \\log_b N$. Power rule: $\\log_b(M^p) = p\\log_b M$.',
    'Each rule is an exponent rule in disguise, because a logarithm is an exponent.',
    'There is no rule for $\\log(M + N)$; and $(\\log M)^2 \\ne 2\\log M$, $\\frac{\\log M}{\\log N} \\ne \\log M - \\log N$.',
    'Expand: quotients, then products, then powers. Condense: coefficients become exponents first, plus goes on top, minus goes on the bottom.',
    'Rules hold only where every log is defined: $\\ln(x^2) = 2\\ln|x|$, not $2\\ln x$, for negative $x$.',
    'Change of base: $\\log_b x = \\frac{\\ln x}{\\ln b}$. All log functions are constant multiples of each other.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 6.5 Logarithmic Properties',
      url: 'https://openstax.org/books/college-algebra-2e/pages/6-5-logarithmic-properties',
      source: 'openstax',
      note: 'Many more expanding and condensing exercises, plus change of base.',
    },
    {
      title: "Paul's Online Notes — Logarithm Properties",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/LogFunctions.aspx',
      source: 'paul',
      note: 'The second half of this page covers the properties, with careful notes on common mistakes.',
    },
    {
      title: 'Wikipedia — Slide rule',
      url: 'https://en.wikipedia.org/wiki/Slide_rule',
      source: 'wikipedia',
      note: 'How the product rule became a mechanical calculator used for three and a half centuries.',
    },
  ],
};
