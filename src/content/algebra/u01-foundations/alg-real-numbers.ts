import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-real-numbers',
  title: 'The Real Number System',
  summary: 'Meet the families of numbers — from counting numbers to $\\sqrt{2}$ — and see why each one had to be invented.',
  minutes: 16,
  objectives: [
    'Classify a number as natural, whole, integer, rational, irrational and/or real',
    'Convert a repeating decimal into a fraction and explain why rational decimals terminate or repeat',
    'Explain why $\\sqrt{2}$ cannot be written as a fraction',
    'Order real numbers on the number line, including negatives',
    'Evaluate absolute values and use $|a - b|$ as the distance between two numbers',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Welcome back: why there are different kinds of numbers',
      blocks: [
        {
          type: 'p',
          text: 'Welcome to Math Forge. Everything in algebra, trigonometry and calculus is built from numbers, so we start by getting precise about what a number *is*. You already know how to use them — this lesson gives names to what you know and fills in the reasons, which is exactly what college courses expect.',
        },
        {
          type: 'p',
          text: 'Here is the big idea: each new family of numbers was invented because an operation kept "breaking" in the old one. Counting numbers are fine for adding, but $3 - 5$ has no answer among them. Integers fix that, but $3 \\div 5$ is not an integer. Fractions fix *that*, yet no fraction squares to $2$. Every time, mathematicians enlarged the system so the operation always works.',
        },
        {
          type: 'table',
          headers: ['Set', 'Symbol', 'Examples', 'Invented so that…'],
          rows: [
            ['[[natural-number|Natural numbers]]', '$\\mathbb{N}$', '$1, 2, 3, \\dots$', 'we can count'],
            ['[[whole-number|Whole numbers]]', '$\\mathbb{W}$', '$0, 1, 2, 3, \\dots$', 'we can count "nothing"'],
            ['[[integer|Integers]]', '$\\mathbb{Z}$', '$\\dots, -2, -1, 0, 1, 2, \\dots$', 'subtraction always works'],
            ['[[rational-number|Rational numbers]]', '$\\mathbb{Q}$', '$\\frac{3}{4},\\ -\\frac{7}{2},\\ 5,\\ 0.25$', 'division (by nonzero numbers) always works'],
            ['[[real-number|Real numbers]]', '$\\mathbb{R}$', '$\\sqrt{2},\\ \\pi,\\ -1.5,\\ 0$', 'every point on a line gets a number'],
          ],
          caption: 'Each set contains the one above it. $\\mathbb{Z}$ comes from the German *Zahlen* ("numbers"); $\\mathbb{Q}$ from *quotient*.',
        },
        {
          type: 'math',
          tex: '\\mathbb{N} \\subset \\mathbb{W} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}',
          caption: '$\\subset$ means "is contained in". Every natural number is also a whole number, an integer, a rational and a real number.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why classify at all?',
          text: 'The set you are working in decides which answers are allowed. "Solve $2x = 3$" has no solution in the integers but has $x = \\frac{3}{2}$ in the rationals. "Solve $x^2 = 2$" has no rational solution but two real ones. Later, $x^2 = -1$ will push us one step further, to complex numbers. Knowing the set tells you what "has no solution" really means.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'You already use number sets in code',
          text: 'Programming types mirror these sets, with a size limit: `unsigned int` is (a finite slice of) the whole numbers, `int` the integers, and `double` approximates the reals. The reason `7 / 2` is `3` in C++ is that integer division must return an integer — the operation "breaks", exactly as described above, and C++ throws away the fractional part.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Some books (and most computer scientists) include $0$ in the natural numbers. This course follows the common college-algebra convention $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$; check which one your textbook uses.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'What is the **smallest** set from the table that contains $-\\frac{12}{4}$?',
      hint: 'Simplify the number first, then ask which sets it belongs to.',
      options: [
        { text: 'Rational numbers $\\mathbb{Q}$', why: 'It *is* rational, but it also belongs to a smaller set once you simplify.' },
        { text: 'Integers $\\mathbb{Z}$', correct: true, why: '$-\\frac{12}{4} = -3$, a negative integer. Integers are the smallest set in the table that contains negative numbers.' },
        { text: 'Whole numbers $\\mathbb{W}$', why: 'Whole numbers are $0, 1, 2, \\dots$ — no negatives.' },
        { text: 'Real numbers only', why: 'Every rational is real, but "real" is the largest set here, not the smallest.' },
      ],
      explanation: 'Classify by *value*, not by how a number is written. $-\\frac{12}{4}$ simplifies to $-3$, so it lives in $\\mathbb{Z}$ (and therefore also in $\\mathbb{Q}$ and $\\mathbb{R}$), but not in $\\mathbb{W}$ or $\\mathbb{N}$ because it is negative.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Rational numbers and their decimals',
      blocks: [
        {
          type: 'definition',
          term: 'Rational number',
          text: 'A number is **rational** if it can be written as $\\dfrac{p}{q}$ where $p$ and $q$ are integers and $q \\neq 0$.',
        },
        {
          type: 'p',
          text: 'Integers are rational ($5 = \\frac{5}{1}$), and so are terminating decimals ($0.25 = \\frac{25}{100} = \\frac{1}{4}$). What about $\\frac{4}{11}$? Long division gives $0.363636\\dots$, written $0.\\overline{36}$ — the bar marks the block that repeats forever.',
        },
        {
          type: 'theorem',
          name: 'Decimals of rational numbers',
          text: 'A number is rational **exactly when** its decimal expansion either terminates or eventually repeats.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a fraction\'s decimal must repeat',
          text: 'When you divide $p$ by $q$ with long division, each step leaves a remainder between $0$ and $q - 1$. There are only $q$ possible remainders. If a remainder is ever $0$, the decimal stops. If not, within $q$ steps some remainder must show up a second time — and from then on the division repeats exactly what it did before. For $4 \\div 11$ the remainders cycle $4, 7, 4, 7, \\dots$, producing $36$ again and again.',
        },
        {
          type: 'p',
          text: 'The reverse also works: any repeating decimal can be turned back into a fraction. The trick is to shift the decimal by multiplying by a power of $10$, then subtract so the infinite tails cancel.',
        },
        {
          type: 'derivation',
          title: 'Write $0.\\overline{36}$ as a fraction',
          steps: [
            { tex: 'x = 0.363636\\dots', why: 'Give the unknown number a name so we can do algebra with it.' },
            { tex: '100x = 36.363636\\dots', why: 'The repeating block has **2** digits, so multiply by $10^2 = 100$. This shifts the decimal point exactly one block to the right.' },
            { tex: '100x - x = 36.3636\\dots - 0.3636\\dots', why: 'Subtract the original equation. Both right-hand sides have the *same* infinite tail $.3636\\dots$' },
            { tex: '99x = 36', why: 'The tails cancel completely, leaving whole numbers.' },
            { tex: 'x = \\frac{36}{99} = \\frac{4}{11}', why: 'Divide by $99$, then simplify by the common factor $9$.' },
          ],
          result: '$0.\\overline{36} = \\frac{4}{11}$. Check: $4 \\div 11 = 0.3636\\dots$ ✓',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why 0.1 + 0.2 != 0.3 on a computer',
          text: 'Computers store numbers in base $2$. In base $2$, the fraction $\\frac{1}{10}$ has a *repeating* expansion ($0.0\\overline{0011}_2$), just as $\\frac{1}{3}$ repeats in base $10$. A `double` keeps only 53 binary digits, so it chops the repeat off and stores a value slightly off from $0.1$. That is why `0.1 + 0.2 == 0.3` is `false` in C++, JavaScript and Python — and why games compare floats with a small tolerance instead of `==`.',
        },
        {
          type: 'deepdive',
          title: 'Does $0.\\overline{9}$ really equal $1$?',
          blocks: [
            {
              type: 'p',
              text: 'Apply the same method. Let $x = 0.999\\dots$ Then $10x = 9.999\\dots$, and subtracting gives $9x = 9$, so $x = 1$. Another way: $\\frac{1}{3} = 0.\\overline{3}$; multiply both sides by $3$ to get $1 = 0.\\overline{9}$.',
            },
            {
              type: 'p',
              text: 'There is no gap between them: if $0.\\overline{9}$ and $1$ were different, some number would sit strictly between them, and no decimal can be squeezed in. Some numbers simply have two decimal spellings.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Write the repeating decimal $0.\\overline{27} = 0.272727\\dots$ as a fraction in lowest terms.',
      hint: 'The repeating block has 2 digits, so compare $100x$ with $x$.',
      answer: '3/11',
      answerTex: '\\frac{3}{11}',
      minDecimals: 6,
      label: '$0.\\overline{27} =$',
      explanation: 'Let $x = 0.\\overline{27}$. Then $100x = 27.\\overline{27}$, and subtracting gives $99x = 27$, so $x = \\frac{27}{99}$. Both numbers share a factor of $9$: $\\frac{27}{99} = \\frac{3}{11}$. Shortcut you can now justify: a pure 2-digit repeat $0.\\overline{ab}$ always equals $\\frac{ab}{99}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Irrational numbers fill the gaps',
      blocks: [
        {
          type: 'p',
          text: 'The rationals are *dense*: between any two of them there is another (their average). It is tempting to think they cover the whole number line. They do not. A square with side $1$ has a diagonal of length $\\sqrt{2}$ (by the Pythagorean theorem, $1^2 + 1^2 = 2$), and $\\sqrt{2}$ is not a fraction.',
        },
        {
          type: 'definition',
          term: 'Irrational number',
          text: 'An [[irrational-number]] is a real number that is **not** rational: it cannot be written as $\\frac{p}{q}$ with integers $p, q$. Its decimal never terminates and never repeats. Examples: $\\sqrt{2} = 1.41421356\\dots$, $\\pi = 3.14159265\\dots$, $e = 2.71828\\dots$',
        },
        {
          type: 'p',
          text: 'Together, the rationals and the irrationals make up the **real numbers**: every real number is exactly one of the two. Geometrically, the reals are all the points on a [[number-line]], with no holes.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\sqrt{2}$ cannot be a fraction',
          text: 'Suppose $\\sqrt{2} = \\frac{p}{q}$ with the fraction already in lowest terms. Squaring gives $p^2 = 2q^2$, so $p^2$ is even, which forces $p$ to be even (an odd number squared is odd). Write $p = 2k$: then $4k^2 = 2q^2$, so $q^2 = 2k^2$ and $q$ is even too. But then $p$ and $q$ share the factor $2$ — contradicting "lowest terms". The assumption was impossible, so $\\sqrt{2}$ is irrational. This style of argument, *proof by contradiction*, will come back throughout your CS degree.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Not every root is irrational',
          text: '$\\sqrt{n}$ for a whole number $n$ is irrational **unless** $n$ is a perfect square. So $\\sqrt{2}, \\sqrt{3}, \\sqrt{12}$ are irrational, but $\\sqrt{9} = 3$ and $\\sqrt{49} = 7$ are integers. Always simplify before you classify. Likewise $\\frac{22}{7}$ is a handy *approximation* of $\\pi$, not its value — $\\frac{22}{7}$ is rational.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-1, 1],
          height: 140,
          points: [
            { x: -3, y: 0, label: '−3', color: 'blue' },
            { x: -1.5, y: 0, label: '−3/2', color: 'green' },
            { x: 0.5, y: 0, label: '1/2', color: 'green' },
            { x: 'sqrt(2)', y: 0, label: '√2', color: 'red' },
            { x: 'pi', y: 0, label: 'π', color: 'red' },
          ],
          caption: 'A few points on the real number line: integers (blue), other rationals (green) and irrationals (red). Every point of the line is a real number.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Which of these numbers is **irrational**?',
      options: [
        { text: '$\\sqrt{49}$', why: '$\\sqrt{49} = 7$, an integer — 49 is a perfect square.' },
        { text: '$0.\\overline{12}$', why: 'A repeating decimal is rational: $0.\\overline{12} = \\frac{12}{99} = \\frac{4}{33}$.' },
        { text: '$\\frac{22}{7}$', why: 'A ratio of two integers is rational by definition — even though it approximates $\\pi$.' },
        { text: '$\\sqrt{20}$', correct: true, why: '$20$ is not a perfect square ($4^2 = 16$, $5^2 = 25$), so $\\sqrt{20} = 4.4721\\dots$ never repeats.' },
        { text: '$-\\frac{8}{4}$', why: 'This is $-2$, an integer.' },
      ],
      explanation: 'The traps are numbers that *look* exotic but simplify to something rational: a root of a perfect square, a repeating decimal, a fraction of integers. Only $\\sqrt{20}$, whose radicand is not a perfect square, is irrational.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'Every square root of a positive integer is irrational.',
      answer: false,
      explanation: 'Square roots of perfect squares are integers: $\\sqrt{1} = 1$, $\\sqrt{4} = 2$, $\\sqrt{100} = 10$. The correct statement is: $\\sqrt{n}$ (for a positive integer $n$) is irrational exactly when $n$ is **not** a perfect square. The same proof-by-contradiction idea used for $\\sqrt{2}$ works for those cases.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Order on the number line',
      blocks: [
        {
          type: 'p',
          text: 'The number line puts the reals in order: $a < b$ means $a$ lies to the **left** of $b$. Positive numbers sit right of $0$, negatives to the left. That is why $-5 < -2$ even though $5 > 2$: $-5$ is further left.',
        },
        {
          type: 'table',
          headers: ['Symbol', 'Meaning', 'Example'],
          rows: [
            ['$a < b$', '$a$ is less than $b$ (left of $b$)', '$-5 < -2$'],
            ['$a \\le b$', '$a$ is less than **or equal to** $b$', '$3 \\le 3$ is true'],
            ['$a > b$', '$a$ is greater than $b$ (right of $b$)', '$0 > -0.1$'],
            ['$a \\ge b$', '$a$ is greater than or equal to $b$', '$\\pi \\ge 3$'],
          ],
        },
        {
          type: 'p',
          text: 'Every real number has an **opposite** $-a$, its mirror image across $0$. Drag the slider: $a$ and $-a$ are always the same distance from $0$, on opposite sides. Note that $-a$ is not always negative — if $a = -2$, then $-a = 2$.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-1, 1],
          height: 150,
          segments: [
            { from: [0, 0.15], to: ['a', 0.15], color: 'blue', arrow: true },
            { from: [0, -0.15], to: ['-a', -0.15], color: 'red', arrow: true },
          ],
          points: [
            { x: 'a', y: 0, label: 'a', color: 'blue' },
            { x: '-a', y: 0, label: '−a', color: 'red' },
            { x: 0, y: 0, label: '0', color: 'gray' },
          ],
          sliders: [{ name: 'a', min: -4.5, max: 4.5, step: 0.1, value: 2.5, label: '$a$' }],
          readouts: [
            { label: '$-a =$', expr: '-a', digits: 2 },
            { label: 'distance from $0$ $=$', expr: 'abs(a)', digits: 2 },
          ],
          caption: 'The distance from $0$ never depends on which side you are on. That distance is the next card\'s topic: absolute value.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Comparing tricky numbers',
          text: 'To order a mix of fractions, roots and decimals, convert each to a decimal with 3–4 digits: $\\sqrt{5} \\approx 2.236$, $\\frac{1}{3} \\approx 0.333$. For negatives, remember the larger magnitude is the *smaller* number: $-2.5 < -2.236$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'Put these numbers in order from **least** to **greatest**.',
      hint: '$\\sqrt{5} \\approx 2.236$, $\\sqrt{2} \\approx 1.414$, $\\frac{1}{3} \\approx 0.333$.',
      lines: ['$-2.5$', '$-\\sqrt{5}$', '$-2$', '$0.3$', '$\\frac{1}{3}$', '$\\sqrt{2}$', '$\\frac{3}{2}$'],
      explanation: 'As decimals: $-2.5,\\ -2.236,\\ -2,\\ 0.3,\\ 0.333\\dots,\\ 1.414,\\ 1.5$. Two spots catch people: among negatives, $-2.5$ is the smallest because it is furthest left; and $0.3 < 0.\\overline{3}$ because $\\frac{1}{3}$ keeps adding more $3$s.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Absolute value: distance from zero',
      blocks: [
        {
          type: 'p',
          text: 'The [[absolute-value]] of a number, written $|a|$, is its distance from $0$ on the number line. Distances are never negative, so $|5| = 5$ and $|-5| = 5$. Informally, absolute value "strips the sign" of a single number — but the precise definition is what you use in algebra:',
        },
        {
          type: 'math',
          tex: '|a| = \\begin{cases} a, & a \\ge 0 \\\\ -a, & a < 0 \\end{cases}',
          caption: 'For a negative $a$, the opposite $-a$ is positive: $|-5| = -(-5) = 5$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the formula says $-a$',
          text: 'The minus sign in "$-a$" looks wrong at first — absolute values are supposed to be positive! But when $a$ is negative, $-a$ means "the opposite of $a$", which *is* positive. Writing it this way lets one formula work for variables whose sign you do not know yet, which is exactly the situation in algebra.',
        },
        {
          type: 'theorem',
          name: 'Distance between two numbers',
          tex: '\\text{dist}(a, b) = |a - b| = |b - a|',
          text: 'Subtracting gives the signed gap; the absolute value throws away the direction.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $|3 - 8| - |-4| + |{-2}| \\cdot 3$',
          steps: [
            { tex: '|3 - 8| - |-4| + |-2| \\cdot 3', why: 'Absolute-value bars act like parentheses: simplify what is inside them first.' },
            { tex: '= |-5| - |-4| + |-2| \\cdot 3', why: 'Inside the first bars, $3 - 8 = -5$.' },
            { tex: '= 5 - 4 + 2 \\cdot 3', why: 'Each absolute value is a distance from $0$: $5$, $4$ and $2$.' },
            { tex: '= 5 - 4 + 6', why: 'Multiply before adding or subtracting (the next lesson explains why).' },
            { tex: '= 7', why: 'Work left to right: $5 - 4 = 1$, then $1 + 6 = 7$.' },
          ],
          result: 'The value is $7$. Note the minus sign *outside* $|-4|$ survives: $-|-4| = -4$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Absolute value does not distribute over addition',
          text: '$|a + b|$ is usually **not** $|a| + |b|$. Try $a = 3$, $b = -5$: $|3 + (-5)| = |-2| = 2$, but $|3| + |-5| = 8$. In general $|a + b| \\le |a| + |b|$ (the *triangle inequality*). Multiplication is fine, though: $|ab| = |a|\\,|b|$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Distance checks in games',
          text: 'Collision and "close enough" tests are built on $|a - b|$. In C++, `std::abs(player.x - enemy.x) < range` asks "are they within `range` units horizontally?" — the absolute value makes the test work whether the enemy is to the left or right.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Find the distance between $-3.5$ and $4$ on the number line.',
      hint: 'Compute $|4 - (-3.5)|$.',
      answer: '7.5',
      label: 'distance $=$',
      explanation: '$|4 - (-3.5)| = |4 + 3.5| = 7.5$. Sanity check with the picture: from $-3.5$ to $0$ is $3.5$ units, and from $0$ to $4$ is $4$ more, for $7.5$ in total. Subtracting in the other order, $|-3.5 - 4| = |-7.5| = 7.5$, gives the same answer.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student evaluates $|-7| - |2 - 9| + |-3|$. Tap the first line that is wrong.',
      lines: [
        '$|-7| - |2 - 9| + |-3|$',
        '$= 7 - |2 - 9| + 3$',
        '$= 7 - (2 + 9) + 3$',
        '$= 7 - 11 + 3$',
        '$= -1$',
      ],
      errorLines: [3],
      explanation: 'Line 3 treats absolute value as "make every number inside positive", turning $|2 - 9|$ into $2 + 9$. Absolute value acts on the *result*: first $2 - 9 = -7$, then $|-7| = 7$. The correct work is $7 - 7 + 3 = 3$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Evaluate $-|-12| + |5 - 9|$.',
      hint: 'The minus sign in front of $|-12|$ is outside the bars, so it is applied *after* the absolute value.',
      answer: '-8',
      explanation: '$|-12| = 12$, so $-|-12| = -12$. Then $|5 - 9| = |-4| = 4$. Total: $-12 + 4 = -8$. An absolute value is never negative, but an expression *containing* absolute values certainly can be.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the chain of number sets, from smallest to largest.',
      template: '$\\mathbb{N} \\subset \\mathbb{W} \\subset$ ___ $\\subset$ ___ $\\subset \\mathbb{R}$',
      blanks: [{ answers: ['$\\mathbb{Z}$'] }, { answers: ['$\\mathbb{Q}$'] }],
      wordBank: ['$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R}$', 'the irrationals'],
      explanation: 'Natural numbers sit inside the whole numbers, which sit inside the integers $\\mathbb{Z}$ (add negatives), which sit inside the rationals $\\mathbb{Q}$ (add fractions), which sit inside the reals $\\mathbb{R}$ (add irrationals). The irrationals are *not* in the chain: they contain no integers at all, so $\\mathbb{Z}$ is not inside them.',
    },
  ],
  takeaways: [
    '$\\mathbb{N} \\subset \\mathbb{W} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$; each set was built so another operation always has an answer.',
    'Rational numbers are $\\frac{p}{q}$ with integers $p, q$ and $q \\ne 0$; their decimals terminate or repeat, because long division has finitely many remainders.',
    'Irrational numbers (like $\\sqrt{2}$ and $\\pi$) have non-repeating, non-terminating decimals; together with the rationals they fill the number line.',
    'On the number line, $a < b$ means $a$ is to the left of $b$, so $-5 < -2$.',
    '$|a|$ is the distance from $a$ to $0$; $|a - b|$ is the distance between $a$ and $b$; and $|a + b| \\ne |a| + |b|$ in general.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.1 Real Numbers: Algebra Essentials',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-1-real-numbers-algebra-essentials',
      source: 'openstax',
      note: 'The textbook version of this lesson, with many classification and ordering exercises.',
    },
    {
      title: 'Wikipedia — Square root of 2',
      url: 'https://en.wikipedia.org/wiki/Square_root_of_2',
      source: 'wikipedia',
      note: 'Several different proofs that $\\sqrt{2}$ is irrational, plus its surprising history.',
    },
    {
      title: 'Wikipedia — Floating-point arithmetic',
      url: 'https://en.wikipedia.org/wiki/Floating-point_arithmetic',
      source: 'wikipedia',
      note: 'How computers approximate real numbers, and why $0.1$ cannot be stored exactly.',
    },
  ],
};
