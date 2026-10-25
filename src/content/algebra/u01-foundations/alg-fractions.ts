import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-fractions',
  title: 'Fractions and Rational Arithmetic',
  summary: 'Simplify, multiply, divide, add and subtract fractions — and finally see *why* you flip and multiply.',
  minutes: 17,
  objectives: [
    'Simplify a fraction to lowest terms using prime factorizations',
    'Multiply and divide fractions, and explain why dividing means multiplying by the reciprocal',
    'Add and subtract fractions using the least common denominator',
    'Convert between mixed numbers and improper fractions and handle negative signs correctly',
    'Simplify a fraction whose numerator or denominator is itself a fraction',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What a fraction means, and when two are equal',
      blocks: [
        {
          type: 'p',
          text: 'A fraction $\\frac{a}{b}$ has two equally valid readings. It is **$a$ divided by $b$**, and it is **$a$ pieces of size $\\frac{1}{b}$** — cut a whole into $b$ equal parts and take $a$ of them. The bottom number (denominator) names the size of the pieces; the top (numerator) counts them.',
        },
        {
          type: 'p',
          text: 'Many fractions name the same number: $\\frac{1}{2} = \\frac{2}{4} = \\frac{50}{100}$. The rule that generates all of them is a single idea from the last lesson — multiplying by $1$ changes nothing.',
        },
        {
          type: 'theorem',
          name: 'Equivalent fractions',
          tex: '\\frac{a}{b} = \\frac{a \\cdot k}{b \\cdot k} \\qquad (b \\ne 0,\\ k \\ne 0)',
          text: 'Read right to left, this is **simplifying**: cancel a factor $k$ shared by the numerator and the denominator.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why equivalent fractions work',
          text: '$\\frac{a \\cdot k}{b \\cdot k} = \\frac{a}{b} \\cdot \\frac{k}{k} = \\frac{a}{b} \\cdot 1 = \\frac{a}{b}$. The multiplicative identity is doing all the work. This also tells you what you may **not** do: cancel a number that is *added* rather than multiplied. In $\\frac{3 + 5}{3 + 7}$ there is no common factor $3$ to cancel (the value is $\\frac{8}{10}$, not $\\frac{5}{7}$).',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\frac{84}{126}$ to lowest terms',
          steps: [
            { tex: '\\frac{84}{126} = \\frac{2 \\cdot 2 \\cdot 3 \\cdot 7}{2 \\cdot 3 \\cdot 3 \\cdot 7}', why: 'Write each number as a product of primes. Prime factorizations make every common factor visible.' },
            { tex: '= \\frac{\\cancel{2} \\cdot 2 \\cdot \\cancel{3} \\cdot \\cancel{7}}{\\cancel{2} \\cdot 3 \\cdot \\cancel{3} \\cdot \\cancel{7}}', why: 'Cancel each prime that appears on both top and bottom. Together they form $k = 2 \\cdot 3 \\cdot 7 = 42$, the greatest common factor.' },
            { tex: '= \\frac{2}{3}', why: 'What remains has no common factor, so the fraction is in [[lowest-terms]].' },
          ],
          result: '$\\frac{84}{126} = \\frac{2}{3}$. Check: $2 \\cdot 42 = 84$ and $3 \\cdot 42 = 126$ ✓',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why the denominator can never be $0$',
          text: 'If $\\frac{5}{0}$ were some number $q$, then by the meaning of division $q \\cdot 0 = 5$. But anything times $0$ is $0$, never $5$. So $\\frac{5}{0}$ is **undefined** — not "infinity", not $0$, just not a number. ($\\frac{0}{5} = 0$ is perfectly fine: zero pieces.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which is $\\frac{90}{144}$ in **lowest terms**?',
      hint: '$90 = 2 \\cdot 3^2 \\cdot 5$ and $144 = 2^4 \\cdot 3^2$.',
      options: [
        { text: '$\\frac{10}{16}$', why: 'Equal in value (you divided by $9$), but $10$ and $16$ still share a factor of $2$.' },
        { text: '$\\frac{15}{24}$', why: 'Equal in value (you divided by $6$), but $15$ and $24$ still share a factor of $3$.' },
        { text: '$\\frac{5}{8}$', correct: true, why: 'The greatest common factor is $2 \\cdot 3^2 = 18$, and $90 \\div 18 = 5$, $144 \\div 18 = 8$. Nothing more cancels.' },
        { text: '$\\frac{8}{5}$', why: 'That is the reciprocal: $\\frac{144}{90}$, upside down.' },
      ],
      explanation: 'Lowest terms means the numerator and denominator share no factor except $1$. The fastest route is the greatest common factor: from the prime factorizations, the shared part is $2 \\cdot 3 \\cdot 3 = 18$, giving $\\frac{5}{8}$. Cancelling in smaller steps is fine too — just keep going until nothing is shared.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Multiplying fractions: a fraction of a fraction',
      blocks: [
        {
          type: 'theorem',
          name: 'Multiplication',
          tex: '\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}',
          text: 'Multiply the numerators, multiply the denominators. No common denominator needed.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "straight across" is right',
          text: 'Think of $\\frac{2}{3} \\cdot \\frac{3}{4}$ as "two-thirds **of** three-quarters" of a square. Cut the square into $4$ columns and shade $3$. Then cut it into $3$ rows and keep $2$ of them. The square is now split into $3 \\cdot 4 = 12$ small cells (denominators multiply), and the doubly-kept region contains $2 \\cdot 3 = 6$ of them (numerators multiply). So the answer is $\\frac{6}{12} = \\frac{1}{2}$.',
        },
        {
          type: 'p',
          text: 'Because the result is one big fraction, you may cancel any factor on top against any factor on the bottom — even across the two fractions — **before** multiplying. This keeps the numbers small.',
        },
        {
          type: 'derivation',
          title: 'Multiply $\\frac{14}{15} \\cdot \\frac{25}{21}$',
          steps: [
            { tex: '\\frac{14}{15} \\cdot \\frac{25}{21} = \\frac{14 \\cdot 25}{15 \\cdot 21}', why: 'Combine into one fraction: numerators on top, denominators on the bottom.' },
            { tex: '= \\frac{2 \\cdot 7 \\cdot 5 \\cdot 5}{3 \\cdot 5 \\cdot 3 \\cdot 7}', why: 'Factor everything instead of multiplying out ($350$ and $315$ would be harder to simplify).' },
            { tex: '= \\frac{2 \\cdot \\cancel{7} \\cdot \\cancel{5} \\cdot 5}{3 \\cdot \\cancel{5} \\cdot 3 \\cdot \\cancel{7}}', why: 'Cancel the shared $7$ and one shared $5$.' },
            { tex: '= \\frac{10}{9}', why: 'Multiply what is left: $2 \\cdot 5 = 10$ on top, $3 \\cdot 3 = 9$ on the bottom.' },
          ],
          result: '$\\frac{14}{15} \\cdot \\frac{25}{21} = \\frac{10}{9}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Fractions in game code: scaling and lerp',
          text: 'Games multiply by fractions constantly: a health bar at $\\frac{3}{4}$ width, a sprite scaled by $\\frac{1}{2}$, or *linear interpolation* `a + t * (b - a)`, which moves the fraction $t$ of the way from `a` to `b`. Watch out in C++: `1 / 2 * width` is `0` because `1 / 2` is integer division. Write `width / 2` or `0.5 * width`.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Dividing fractions: why you flip and multiply',
      blocks: [
        {
          type: 'p',
          text: 'You probably memorised "keep, change, flip". Here is why it works. Start with what division *asks*: $3 \\div \\frac{1}{2}$ asks "how many halves fit in $3$?" — the answer is $6$, which is $3 \\cdot 2$. Dividing by $\\frac{1}{2}$ gave the same result as multiplying by its [[reciprocal]] $2$.',
        },
        {
          type: 'theorem',
          name: 'Division',
          tex: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} \\qquad (b, c, d \\ne 0)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why flipping is legal: make the denominator 1',
          text: 'Write the division as one stacked fraction and multiply top and bottom by $\\frac{d}{c}$ (that is multiplying by $1$, so the value is unchanged):\n\n$$\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{\\frac{a}{b} \\cdot \\frac{d}{c}}{\\frac{c}{d} \\cdot \\frac{d}{c}} = \\frac{\\frac{a}{b} \\cdot \\frac{d}{c}}{1} = \\frac{a}{b} \\cdot \\frac{d}{c}$$\n\nA number times its reciprocal is $1$, so the bottom disappears. "Flip and multiply" is just the shortcut for this.',
        },
        {
          type: 'derivation',
          title: 'Divide $\\frac{3}{4} \\div \\frac{5}{8}$',
          steps: [
            { tex: '\\frac{3}{4} \\div \\frac{5}{8} = \\frac{3}{4} \\cdot \\frac{8}{5}', why: 'Keep the first fraction, change $\\div$ to $\\cdot$, and replace the **second** fraction by its reciprocal.' },
            { tex: '= \\frac{3 \\cdot 8}{4 \\cdot 5} = \\frac{3 \\cdot 2 \\cdot \\cancel{4}}{\\cancel{4} \\cdot 5}', why: 'Multiply straight across; factor $8 = 2 \\cdot 4$ and cancel the $4$.' },
            { tex: '= \\frac{6}{5}', why: 'What remains is in lowest terms.' },
          ],
          result: '$\\frac{3}{4} \\div \\frac{5}{8} = \\frac{6}{5}$. Sense check: $\\frac{5}{8}$ fits into $\\frac{3}{4} = \\frac{6}{8}$ a bit more than once ✓',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Flip the divisor, not the dividend',
          text: 'Only the fraction you are dividing **by** gets flipped. $\\frac{3}{4} \\div \\frac{5}{8}$ is $\\frac{3}{4} \\cdot \\frac{8}{5}$, not $\\frac{4}{3} \\cdot \\frac{5}{8}$ (that would compute $\\frac{5}{8} \\div \\frac{3}{4}$, the reciprocal of the answer).',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Compute $\\frac{5}{6} \\div \\frac{10}{9}$. Give your answer as a fraction in lowest terms.',
      hint: 'Multiply $\\frac{5}{6}$ by the reciprocal of $\\frac{10}{9}$, cancelling before you multiply.',
      answer: '3/4',
      answerTex: '\\frac{3}{4}',
      explanation: '$\\frac{5}{6} \\div \\frac{10}{9} = \\frac{5}{6} \\cdot \\frac{9}{10} = \\frac{5 \\cdot 9}{6 \\cdot 10}$. Factor: $\\frac{5 \\cdot 3 \\cdot 3}{2 \\cdot 3 \\cdot 2 \\cdot 5}$, cancel a $5$ and a $3$, leaving $\\frac{3}{4}$. If you got $\\frac{4}{3}$, you flipped the first fraction instead of the second.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Adding and subtracting: common denominators',
      blocks: [
        {
          type: 'p',
          text: 'Addition is different. Remember that the denominator names the **size of the pieces**. Three eighths plus two eighths is five eighths, just as three apples plus two apples is five apples. You can only add pieces of the same size.',
        },
        {
          type: 'theorem',
          name: 'Same denominator',
          tex: '\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c} \\qquad \\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c}',
          text: 'Why: $\\frac{a}{c} + \\frac{b}{c} = a \\cdot \\frac{1}{c} + b \\cdot \\frac{1}{c} = (a + b) \\cdot \\frac{1}{c}$ by the distributive property.',
        },
        {
          type: 'compare',
          left: {
            title: 'Adding the denominators',
            tone: 'bad',
            tex: ['\\frac{1}{2} + \\frac{1}{2} = \\frac{2}{4} = \\frac{1}{2}\\ ?'],
            text: 'Half a pizza plus half a pizza is not half a pizza.',
          },
          right: {
            title: 'Adding pieces of the same size',
            tone: 'good',
            tex: ['\\frac{1}{2} + \\frac{1}{2} = \\frac{1 + 1}{2} = \\frac{2}{2} = 1'],
            text: 'Two halves make one whole.',
          },
        },
        {
          type: 'p',
          text: 'When the denominators differ, first rewrite both fractions with a common denominator using equivalent fractions. Any common multiple works, but the [[least-common-denominator]] (LCD) keeps the numbers smallest. To find it, take each prime to the **highest power** that appears in either denominator.',
        },
        {
          type: 'derivation',
          title: 'Add $\\frac{5}{12} + \\frac{7}{18}$',
          steps: [
            { tex: '12 = 2^2 \\cdot 3, \\quad 18 = 2 \\cdot 3^2', why: 'Prime-factor the denominators.' },
            { tex: '\\text{LCD} = 2^2 \\cdot 3^2 = 36', why: 'Take the highest power of each prime: $2^2$ from $12$, $3^2$ from $18$. (The product $12 \\cdot 18 = 216$ would also work, just with bigger numbers.)' },
            { tex: '\\frac{5}{12} + \\frac{7}{18} = \\frac{5 \\cdot 3}{12 \\cdot 3} + \\frac{7 \\cdot 2}{18 \\cdot 2}', why: 'Multiply each fraction by a form of $1$ that turns its denominator into $36$: $36 \\div 12 = 3$ and $36 \\div 18 = 2$.' },
            { tex: '= \\frac{15}{36} + \\frac{14}{36}', why: 'Now the pieces are the same size (thirty-sixths).' },
            { tex: '= \\frac{29}{36}', why: 'Add the numerators and keep the denominator. $29$ is prime and does not divide $36$, so this is in lowest terms.' },
          ],
          result: '$\\frac{5}{12} + \\frac{7}{18} = \\frac{29}{36}$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The LCD technique is not just arithmetic: it is exactly how you will add rational expressions like $\\frac{1}{x} + \\frac{1}{x + 1}$ in the next unit, and how you will clear fractions from equations. Instructors often grade the LCD step separately, so show it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student computes $\\frac{2}{3} + \\frac{5}{8}$. Tap the first line that is wrong.',
      lines: [
        '$\\frac{2}{3} + \\frac{5}{8}$',
        '$= \\frac{2 \\cdot 8}{3 \\cdot 8} + \\frac{5 \\cdot 3}{8 \\cdot 3}$',
        '$= \\frac{16}{24} + \\frac{15}{24}$',
        '$= \\frac{31}{48}$',
      ],
      errorLines: [4],
      explanation: 'Lines 2 and 3 correctly build a common denominator of $24$. Line 4 then adds the denominators as well as the numerators. Once the pieces are all twenty-fourths, you add only the *counts*: $\\frac{16 + 15}{24} = \\frac{31}{24}$ (which is $1\\frac{7}{24}$ — sensibly a bit more than $1$, since both fractions are more than a half).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Compute $\\frac{5}{12} - \\frac{3}{8} + \\frac{1}{6}$. Give your answer as a fraction in lowest terms.',
      hint: '$12 = 2^2 \\cdot 3$, $8 = 2^3$, $6 = 2 \\cdot 3$, so the LCD is $2^3 \\cdot 3 = 24$.',
      answer: '5/24',
      answerTex: '\\frac{5}{24}',
      explanation: 'With LCD $24$: $\\frac{5}{12} = \\frac{10}{24}$, $\\frac{3}{8} = \\frac{9}{24}$ and $\\frac{1}{6} = \\frac{4}{24}$. Then work left to right: $\\frac{10 - 9 + 4}{24} = \\frac{5}{24}$. Using $12 \\cdot 8 \\cdot 6 = 576$ as the denominator also works but leads to $\\frac{120}{576}$, which you would then have to simplify.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'Put the steps for computing $\\frac{1}{6} + \\frac{3}{10}$ in order.',
      lines: [
        'Find the LCD: $6 = 2 \\cdot 3$ and $10 = 2 \\cdot 5$, so the LCD is $30$',
        'Rewrite: $\\frac{1}{6} = \\frac{5}{30}$ and $\\frac{3}{10} = \\frac{9}{30}$',
        'Add the numerators: $\\frac{5 + 9}{30} = \\frac{14}{30}$',
        'Simplify: $\\frac{14}{30} = \\frac{7}{15}$',
      ],
      distractors: ['Add the denominators: $6 + 10 = 16$'],
      explanation: 'Common denominator first, then convert each fraction, then add only the numerators, then reduce. The answer must be simplified at the end because $14$ and $30$ share a factor of $2$. Adding denominators is never a step in fraction addition.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Mixed numbers, signs and stacked fractions',
      blocks: [
        {
          type: 'p',
          text: 'A [[mixed-number]] like $2\\frac{3}{4}$ means $2 + \\frac{3}{4}$. Before multiplying or dividing, convert it to an *improper fraction* (numerator at least as large as the denominator): $2\\frac{3}{4} = \\frac{8}{4} + \\frac{3}{4} = \\frac{11}{4}$. The shortcut "whole times denominator, plus numerator" is just this addition.',
        },
        {
          type: 'derivation',
          title: 'Multiply $2\\frac{1}{2} \\cdot 1\\frac{1}{3}$',
          steps: [
            { tex: '2\\tfrac{1}{2} \\cdot 1\\tfrac{1}{3} = \\frac{5}{2} \\cdot \\frac{4}{3}', why: 'Convert: $2 + \\frac{1}{2} = \\frac{5}{2}$ and $1 + \\frac{1}{3} = \\frac{4}{3}$.' },
            { tex: '= \\frac{5 \\cdot 4}{2 \\cdot 3} = \\frac{20}{6}', why: 'Multiply straight across.' },
            { tex: '= \\frac{10}{3} = 3\\tfrac{1}{3}', why: 'Cancel the common factor $2$; convert back to a mixed number if the context wants one ($10 = 3 \\cdot 3 + 1$).' },
          ],
          result: '$2\\frac{1}{2} \\cdot 1\\frac{1}{3} = \\frac{10}{3}$. Multiplying the parts separately ($2 \\cdot 1 + \\frac{1}{2} \\cdot \\frac{1}{3} = 2\\frac{1}{6}$) is wrong: it ignores the distributive property.',
        },
        {
          type: 'p',
          text: '**Negative fractions.** A single minus sign can sit in three places: $-\\frac{a}{b} = \\frac{-a}{b} = \\frac{a}{-b}$, because a negative divided by a positive is negative either way. Two minus signs cancel: $\\frac{-a}{-b} = \\frac{a}{b}$. By convention, write answers with a positive denominator.',
        },
        {
          type: 'p',
          text: '**Stacked (complex) fractions.** When the numerator or denominator contains fractions, simplify each part to a single fraction, then divide by flipping and multiplying.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\dfrac{\\frac{1}{2} + \\frac{1}{4}}{\\frac{3}{8}}$',
          steps: [
            { tex: '\\frac{\\frac{1}{2} + \\frac{1}{4}}{\\frac{3}{8}} = \\frac{\\frac{2}{4} + \\frac{1}{4}}{\\frac{3}{8}} = \\frac{\\frac{3}{4}}{\\frac{3}{8}}', why: 'The main fraction bar groups its numerator: combine $\\frac{1}{2} + \\frac{1}{4}$ first using the common denominator $4$.' },
            { tex: '= \\frac{3}{4} \\cdot \\frac{8}{3}', why: 'Dividing by $\\frac{3}{8}$ means multiplying by its reciprocal.' },
            { tex: '= \\frac{\\cancel{3} \\cdot 2 \\cdot \\cancel{4}}{\\cancel{4} \\cdot \\cancel{3}} = 2', why: 'Factor $8 = 2 \\cdot 4$ and cancel.' },
          ],
          result: 'The value is $2$: three-eighths fits into three-quarters exactly twice.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'You can split a numerator, never a denominator',
          text: '$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$ is always true (that is the same-denominator rule backwards). But $\\frac{c}{a + b}$ is **not** $\\frac{c}{a} + \\frac{c}{b}$. Test it: $\\frac{6}{2 + 4} = 1$, while $\\frac{6}{2} + \\frac{6}{4} = 4.5$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'Combine into a single fraction: $\\dfrac{x}{4} - \\dfrac{x - 2}{6}$.',
      hint: 'The LCD of $4$ and $6$ is $12$. Keep $(x - 2)$ in parentheses when you multiply it by $2$ — the minus sign applies to all of it.',
      label: 'result:',
      answer: '(x + 4)/12',
      answerTex: '\\frac{x + 4}{12}',
      explanation: '$\\frac{x}{4} = \\frac{3x}{12}$ and $\\frac{x - 2}{6} = \\frac{2(x - 2)}{12} = \\frac{2x - 4}{12}$. Subtracting the **whole** numerator: $\\frac{3x - (2x - 4)}{12} = \\frac{3x - 2x + 4}{12} = \\frac{x + 4}{12}$. The classic slip is $3x - 2x - 4$, giving $\\frac{x - 4}{12}$: a fraction bar groups its numerator, so the subtraction hits every term.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: '$\\dfrac{12}{3 + 1} = \\dfrac{12}{3} + \\dfrac{12}{1}$',
      answer: false,
      explanation: 'The left side is $\\frac{12}{4} = 3$; the right side is $4 + 12 = 16$. A sum in the **denominator** cannot be split, because the denominator is the size of the pieces — changing it changes everything. Only a sum in the numerator splits: $\\frac{3 + 1}{12} = \\frac{3}{12} + \\frac{1}{12}$ is true.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the summary of fraction arithmetic.',
      template: 'To divide by $\\frac{c}{d}$, multiply by its ___ $\\frac{d}{c}$. To add or subtract fractions, first rewrite them over a ___, then combine the ___ only.',
      blanks: [{ answers: ['reciprocal'] }, { answers: ['common denominator'] }, { answers: ['numerators'] }],
      wordBank: ['reciprocal', 'common denominator', 'numerators', 'opposite', 'common numerator', 'denominators'],
      explanation: 'Division by a fraction is multiplication by its reciprocal (because a number times its reciprocal is $1$). Addition needs pieces of the same size — a common denominator — and then only the numerators (the counts of pieces) are added or subtracted. The denominator stays put.',
    },
  ],
  takeaways: [
    '$\\frac{a}{b} = \\frac{ak}{bk}$ for $k \\ne 0$: simplifying cancels **factors** shared by the numerator and denominator, never terms that are added.',
    'Multiply straight across: $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$; cancel common factors before multiplying.',
    'Divide by multiplying by the reciprocal: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$, which works because $\\frac{c}{d} \\cdot \\frac{d}{c} = 1$.',
    'Add and subtract only over a common denominator (preferably the LCD), then combine numerators and simplify.',
    'Convert mixed numbers to improper fractions before multiplying; a sum in a numerator can be split, a sum in a denominator cannot; division by $0$ is undefined.',
  ],
  reading: [
    {
      title: 'Khan Academy — Pre-algebra',
      url: 'https://www.khanacademy.org/math/pre-algebra',
      source: 'khan',
      note: 'Short videos and practice sets on fractions, factors and the LCD if you want more drill.',
    },
    {
      title: "Paul's Online Notes — Algebra Preliminaries",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Preliminaries.aspx',
      source: 'paul',
      note: 'A college-level review of the arithmetic you need before algebra, including fraction rules.',
    },
    {
      title: 'Wikipedia — Fraction',
      url: 'https://en.wikipedia.org/wiki/Fraction',
      source: 'wikipedia',
      note: 'Fraction arithmetic, history, and the connection between fractions and rational numbers.',
    },
  ],
};
