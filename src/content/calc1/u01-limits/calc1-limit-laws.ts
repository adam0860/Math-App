import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-limit-laws',
  title: 'Computing Limits Algebraically',
  summary: 'The limit laws, direct substitution, and the algebra (factoring, rationalizing, combining fractions) that rescues you from 0/0.',
  minutes: 18,
  objectives: [
    'State the limit laws and use them to justify each step of a limit computation',
    'Use direct substitution for polynomials, rational functions and other familiar functions',
    'Explain why $\\frac{0}{0}$ is an indeterminate form rather than an answer',
    'Evaluate $\\frac{0}{0}$ limits by factoring, rationalizing, or combining fractions',
    'Follow a reliable strategy for any limit $\\lim_{x \\to a} f(x)$ with finite $a$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The limit laws',
      blocks: [
        {
          type: 'p',
          text: 'Tables and graphs let you *guess* limits. To *know* them, we need rules. The good news is that limits behave exactly the way you would hope with respect to arithmetic: the limit of a sum is the sum of the limits, and so on. These rules are the [[limit-laws]].',
        },
        {
          type: 'p',
          text: 'Two basic limits start everything off. A constant function stays put, and the function $x$ goes wherever $x$ goes:',
        },
        {
          type: 'math',
          tex: '\\lim_{x \\to a} c = c \\qquad\\qquad \\lim_{x \\to a} x = a',
        },
        {
          type: 'table',
          headers: ['Law', 'Statement (if $\\lim\\limits_{x \\to a} f(x) = L$ and $\\lim\\limits_{x \\to a} g(x) = M$ exist)'],
          rows: [
            ['Sum / Difference', '$\\lim [f(x) \\pm g(x)] = L \\pm M$'],
            ['Constant multiple', '$\\lim [c\\,f(x)] = cL$'],
            ['Product', '$\\lim [f(x)\\,g(x)] = LM$'],
            ['Quotient', '$\\lim \\dfrac{f(x)}{g(x)} = \\dfrac{L}{M}$, **provided $M \\ne 0$**'],
            ['Power', '$\\lim [f(x)]^n = L^n$ for any positive integer $n$'],
            ['Root', '$\\lim \\sqrt[n]{f(x)} = \\sqrt[n]{L}$ (if $n$ is even, assume $L > 0$)'],
          ],
          caption: 'All limits are taken as $x \\to a$. Every law requires the individual limits to exist first.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim\\limits_{x \\to 2} \\dfrac{3x^2 - x + 4}{x + 1}$, justifying every step',
          steps: [
            { tex: '\\lim_{x \\to 2} \\frac{3x^2 - x + 4}{x + 1} = \\frac{\\lim_{x \\to 2} (3x^2 - x + 4)}{\\lim_{x \\to 2} (x + 1)}', why: '**Quotient law.** Allowed because the denominator\'s limit is $2 + 1 = 3 \\ne 0$ (we will confirm it below).' },
            { tex: '= \\frac{3\\lim_{x \\to 2} x^2 - \\lim_{x \\to 2} x + \\lim_{x \\to 2} 4}{\\lim_{x \\to 2} x + \\lim_{x \\to 2} 1}', why: '**Sum, difference and constant multiple laws**: split into pieces and pull out the $3$.' },
            { tex: '= \\frac{3\\left(\\lim_{x \\to 2} x\\right)^2 - \\lim_{x \\to 2} x + \\lim_{x \\to 2} 4}{\\lim_{x \\to 2} x + \\lim_{x \\to 2} 1}', why: '**Power law** with $n = 2$.' },
            { tex: '= \\frac{3(2)^2 - 2 + 4}{2 + 1}', why: '**Basic limits**: $\\lim_{x \\to 2} x = 2$ and $\\lim_{x \\to 2} c = c$.' },
            { tex: '= \\frac{14}{3}', why: 'Arithmetic: $12 - 2 + 4 = 14$.' },
          ],
          result: '$\\lim_{x \\to 2} \\frac{3x^2 - x + 4}{x + 1} = \\frac{14}{3}$ — the same number you get by simply plugging in $x = 2$. That is no accident (next card).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the sum law is believable',
          text: 'If $f(x)$ is within $0.001$ of $L$ and $g(x)$ is within $0.001$ of $M$, then $f(x) + g(x)$ is within $0.002$ of $L + M$: the errors can at worst add. Since we can make each error as small as we like, we can make the total error as small as we like — which is exactly what $\\lim [f(x) + g(x)] = L + M$ means. The other laws have similar (slightly messier) proofs using the precise definition at the end of this unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Name the limit law used in each step.',
      template: '$\\lim\\limits_{x \\to 1} (x^2 + 5)(2x - 1) = \\lim\\limits_{x \\to 1}(x^2 + 5) \\cdot \\lim\\limits_{x \\to 1}(2x - 1)$ uses the ___ law. Then $\\lim\\limits_{x \\to 1} (x^2 + 5) = \\lim\\limits_{x \\to 1} x^2 + \\lim\\limits_{x \\to 1} 5$ uses the ___ law, and $\\lim\\limits_{x \\to 1} 2x = 2\\lim\\limits_{x \\to 1} x$ uses the ___ law.',
      blanks: [{ answers: ['product'] }, { answers: ['sum'] }, { answers: ['constant multiple'] }],
      wordBank: ['product', 'sum', 'constant multiple', 'quotient', 'power', 'root'],
      explanation: 'Step 1 splits a **product** into the product of two limits (both exist, so it is allowed). Step 2 splits a **sum**. Step 3 pulls a **constant multiple** outside the limit. Finishing the job: $\\lim_{x \\to 1} x^2 = 1$ (power law), so the answer is $(1 + 5)(2 - 1) = 6$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Direct substitution',
      blocks: [
        {
          type: 'p',
          text: 'Writing out every law is tedious, and the example on the last card ended up equal to plugging in. That happens every time for polynomials and rational functions, because they are built from $x$ and constants using only the operations the laws cover.',
        },
        {
          type: 'theorem',
          name: 'Direct substitution property',
          text: 'If $f$ is a polynomial, or a [[rational-function]] and $a$ is in its domain (denominator $\\ne 0$ at $a$), then $$\\lim_{x \\to a} f(x) = f(a).$$',
        },
        {
          type: 'p',
          text: 'The same is true for roots, trig functions, exponentials and logarithms at every point of their domains, and for sums, products, quotients and compositions of them (where defined). Functions with this "limit = value" property are called continuous — the next unit is about them, but you may use substitution for these familiar functions from now on.',
        },
        {
          type: 'derivation',
          title: 'Two quick substitutions',
          steps: [
            { tex: '\\lim_{x \\to 2} \\sqrt{x^2 + 5} = \\sqrt{\\lim_{x \\to 2} (x^2 + 5)}', why: 'Root law; the inside approaches $9 > 0$, so the even root is fine.' },
            { tex: '= \\sqrt{2^2 + 5} = \\sqrt{9} = 3', why: 'Direct substitution in the polynomial inside.' },
            { tex: '\\lim_{x \\to \\pi} (x \\cos x) = \\pi \\cos \\pi = -\\pi', why: 'Product of two familiar functions, both defined at $\\pi$: substitute. ($\\cos \\pi = -1$.)' },
          ],
          result: 'When substitution produces an ordinary number, that number is the limit. You are done.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The laws need the pieces to exist',
          text: 'For $x \\ne 0$, $x \\cdot \\frac{1}{x} = 1$, so $\\lim_{x \\to 0} \\left(x \\cdot \\frac{1}{x}\\right) = 1$. But you **cannot** get there with the product law as $\\lim x \\cdot \\lim \\frac{1}{x}$, because $\\lim_{x \\to 0} \\frac{1}{x}$ does not exist. Before splitting a limit, make sure each piece has a finite limit — and for the quotient law, that the denominator\'s limit is not $0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Evaluate the limit.',
      tex: '\\lim_{x \\to -1} \\frac{x^3 + 2x^2 - 5}{x - 3}',
      hint: 'The denominator is $-4 \\ne 0$ at $x = -1$, so direct substitution applies. Watch the signs: $(-1)^3 = -1$ and $(-1)^2 = 1$.',
      label: 'limit $=$',
      answer: '1',
      explanation: 'This is a rational function and $x = -1$ is in its domain, so substitute: numerator $(-1)^3 + 2(-1)^2 - 5 = -1 + 2 - 5 = -4$; denominator $-1 - 3 = -4$. The limit is $\\frac{-4}{-4} = 1$. The most common error is writing $(-1)^3 = 1$ or $2(-1)^2 = -2$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Zero over zero: an indeterminate form',
      blocks: [
        {
          type: 'p',
          text: 'Direct substitution fails exactly where the quotient law fails: when the denominator\'s limit is $0$. If the numerator\'s limit is *not* $0$, you get an infinite limit (previous lesson). The genuinely interesting case is when **both** go to $0$.',
        },
        {
          type: 'table',
          headers: ['Limit as $x \\to 0$', 'Substitution gives', 'Simplify ($x \\ne 0$)', 'Actual limit'],
          rows: [
            ['$\\dfrac{5x}{x}$', '$\\frac{0}{0}$', '$5$', '$5$'],
            ['$\\dfrac{x^2}{x}$', '$\\frac{0}{0}$', '$x$', '$0$'],
            ['$\\dfrac{x}{x^3}$', '$\\frac{0}{0}$', '$\\dfrac{1}{x^2}$', '$\\infty$'],
            ['$\\dfrac{|x|}{x}$', '$\\frac{0}{0}$', '$\\pm 1$', 'does not exist'],
          ],
          caption: 'Same "$\\frac{0}{0}$", four different outcomes.',
        },
        {
          type: 'definition',
          term: 'Indeterminate form $\\frac{0}{0}$',
          text: 'If $\\lim f(x) = 0$ and $\\lim g(x) = 0$, the limit $\\lim \\frac{f(x)}{g(x)}$ is said to have the [[indeterminate-form]] $\\frac{0}{0}$. "Indeterminate" means the form alone does not determine the answer: the limit could be any number, $\\pm\\infty$, or nonexistent. You must do more work.',
        },
        {
          type: 'p',
          text: 'The work is algebra, and it rests on one theorem. Since a limit never looks at $x = a$ itself, two functions that agree everywhere *except* at $a$ must have the same limit there.',
        },
        {
          type: 'theorem',
          name: 'Functions that agree near $a$',
          text: 'If $f(x) = g(x)$ for all $x \\ne a$ in some open interval around $a$, and $\\lim_{x \\to a} g(x)$ exists, then $\\lim_{x \\to a} f(x) = \\lim_{x \\to a} g(x)$.',
        },
        {
          type: 'graph',
          x: [-2, 3],
          y: [-1, 4.5],
          functions: [
            { expr: '(x^2 - 1)/(x - 1)', label: '$f(x) = \\frac{x^2 - 1}{x - 1}$' },
            { expr: 'x + 1', label: '$g(x) = x + 1$', color: 'orange', dashed: true },
          ],
          points: [
            { x: 1, y: 2, open: true, label: 'hole (1, 2)' },
            { x: '1 + d', y: '((1 + d)^2 - 1)/((1 + d) - 1)', color: 'purple' },
          ],
          sliders: [{ name: 'd', min: -1, max: 1, step: 0.01, value: 0.8, label: 'offset from 1, $d$' }],
          readouts: [
            { label: '$f(1 + d) =$', expr: '((1 + d)^2 - 1)/((1 + d) - 1)', digits: 4 },
            { label: '$g(1 + d) =$', expr: '(1 + d) + 1', digits: 4 },
          ],
          caption: 'The two readouts agree for every $d \\ne 0$. Only at $d = 0$ do they differ: $f(1)$ is $\\frac{0}{0}$ (undefined) while $g(1) = 2$. Since the limit ignores $x = 1$ itself, both limits are $2$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why cancelling is legal here (and only here)',
          text: '$\\frac{(x - 1)(x + 1)}{x - 1} = x + 1$ requires dividing by $x - 1$, which is only allowed when $x \\ne 1$. In a limit as $x \\to 1$, that is exactly the situation: $x$ is near $1$ but never equal to it. So the cancelled function agrees with the original everywhere the limit cares about, and the theorem says their limits match. Writing $\\frac{x^2 - 1}{x - 1} = x + 1$ *without* a limit or the condition $x \\ne 1$ is false at $x = 1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Technique 1: factor and cancel',
      blocks: [
        {
          type: 'p',
          text: 'When a rational function gives $\\frac{0}{0}$ at $x = a$, both numerator and denominator are zero at $a$. By the [[factor-theorem]], both then contain a factor of $(x - a)$. Factor it out of each, cancel it, and substitute again.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim\\limits_{x \\to 2} \\dfrac{x^2 + x - 6}{x^2 - 4}$',
          steps: [
            { tex: '\\frac{4 + 2 - 6}{4 - 4} = \\frac{0}{0}', why: 'Always try substitution first. $\\frac{0}{0}$ says: do algebra. (It does **not** say the limit is $0$ or undefined.)' },
            { tex: '\\lim_{x \\to 2} \\frac{(x - 2)(x + 3)}{(x - 2)(x + 2)}', why: 'Factor both. As the factor theorem promised, $(x - 2)$ appears in each. The bottom is a [[difference-of-squares]].' },
            { tex: '= \\lim_{x \\to 2} \\frac{x + 3}{x + 2}', why: 'Cancel $(x - 2)$: legal since $x \\ne 2$ throughout the limit.' },
            { tex: '= \\frac{2 + 3}{2 + 2} = \\frac{5}{4}', why: 'Now substitution works: the denominator is $4 \\ne 0$.' },
          ],
          result: '$\\lim_{x \\to 2} \\frac{x^2 + x - 6}{x^2 - 4} = \\frac{5}{4}$. The graph has a hole at $(2, \\frac{5}{4})$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim\\limits_{x \\to 2} \\dfrac{x^3 - 8}{x - 2}$',
          steps: [
            { tex: '\\frac{8 - 8}{2 - 2} = \\frac{0}{0}', why: 'Substitution gives the indeterminate form.' },
            { tex: '\\lim_{x \\to 2} \\frac{(x - 2)(x^2 + 2x + 4)}{x - 2}', why: 'Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ with $a = x$, $b = 2$.' },
            { tex: '= \\lim_{x \\to 2} (x^2 + 2x + 4)', why: 'Cancel the common factor ($x \\ne 2$).' },
            { tex: '= 4 + 4 + 4 = 12', why: 'Substitute $x = 2$ into the polynomial.' },
          ],
          result: '$\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2} = 12$. (In Unit 3 you will recognise this as the slope of $y = x^3$ at $x = 2$.)',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Self-check',
          text: 'If you factored correctly, the factor $(x - a)$ shows up in **both** numerator and denominator. If it doesn\'t, re-check your factoring before anything else — a $\\frac{0}{0}$ rational function always has it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Evaluate the limit.',
      tex: '\\lim_{x \\to -4} \\frac{x^2 + 2x - 8}{x + 4}',
      hint: 'Substitution gives $\\frac{0}{0}$, so $(x + 4)$ is a factor of the numerator. Find the other factor.',
      label: 'limit $=$',
      answer: '-6',
      explanation: 'Substituting gives $\\frac{16 - 8 - 8}{0} = \\frac{0}{0}$. Factor: $x^2 + 2x - 8 = (x + 4)(x - 2)$. For $x \\ne -4$ the quotient is $x - 2$, so the limit is $-4 - 2 = -6$. Check the factoring by expanding: $(x + 4)(x - 2) = x^2 + 2x - 8$. ✓',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student evaluates $\\lim\\limits_{x \\to 3} \\dfrac{x^2 - 2x - 3}{x^2 - 9}$. Tap the first line that is wrong.',
      lines: [
        'Substituting gives $\\frac{9 - 6 - 3}{9 - 9} = \\frac{0}{0}$, so simplify first',
        '$= \\lim\\limits_{x \\to 3} \\dfrac{(x - 3)(x - 1)}{(x - 3)(x + 3)}$',
        '$= \\lim\\limits_{x \\to 3} \\dfrac{x - 1}{x + 3}$',
        '$= \\dfrac{3 - 1}{3 + 3} = \\dfrac{1}{3}$',
      ],
      errorLines: [2],
      explanation: 'The numerator is factored wrongly: $(x - 3)(x - 1) = x^2 - 4x + 3$, not $x^2 - 2x - 3$. The correct factorisation is $x^2 - 2x - 3 = (x - 3)(x + 1)$ (two numbers with product $-3$ and sum $-2$). Then the limit is $\\lim_{x \\to 3} \\frac{x + 1}{x + 3} = \\frac{4}{6} = \\frac{2}{3}$. Expanding your factors to check takes five seconds and catches this every time.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Technique 2: rationalize; Technique 3: combine fractions',
      blocks: [
        {
          type: 'p',
          text: 'Square roots don\'t factor nicely, so a different trick removes the $\\frac{0}{0}$. Multiply top and bottom by the **conjugate** (same terms, opposite sign between them). Because $(A - B)(A + B) = A^2 - B^2$, the square root disappears — the same idea as [[rationalizing-the-denominator]] in algebra, now applied to whichever part holds the root.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim\\limits_{x \\to 0} \\dfrac{\\sqrt{x + 9} - 3}{x}$',
          steps: [
            { tex: '\\frac{\\sqrt{9} - 3}{0} = \\frac{0}{0}', why: 'Substitution gives the indeterminate form, and there is no polynomial to factor.' },
            { tex: '\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x} \\cdot \\frac{\\sqrt{x + 9} + 3}{\\sqrt{x + 9} + 3}', why: 'Multiply by the conjugate over itself — a form of $1$, so the value is unchanged.' },
            { tex: '= \\lim_{x \\to 0} \\frac{(x + 9) - 9}{x\\left(\\sqrt{x + 9} + 3\\right)}', why: 'Top: $(\\sqrt{x+9})^2 - 3^2$ by difference of squares. Leave the bottom factored — you are about to cancel.' },
            { tex: '= \\lim_{x \\to 0} \\frac{x}{x\\left(\\sqrt{x + 9} + 3\\right)}', why: 'Simplify: the $9$s cancel, exposing a factor of $x$ on top.' },
            { tex: '= \\lim_{x \\to 0} \\frac{1}{\\sqrt{x + 9} + 3}', why: 'Cancel $x$ ($x \\ne 0$ in the limit).' },
            { tex: '= \\frac{1}{3 + 3} = \\frac{1}{6}', why: 'Direct substitution now works.' },
          ],
          result: '$\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x} = \\frac{1}{6}$.',
        },
        {
          type: 'p',
          text: 'When the expression contains fractions inside a fraction, combine them over a common denominator first; the factor you need to cancel then appears.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\lim\\limits_{x \\to 3} \\dfrac{\\frac{1}{x} - \\frac{1}{3}}{x - 3}$',
          steps: [
            { tex: '\\frac{\\frac{1}{3} - \\frac{1}{3}}{0} = \\frac{0}{0}', why: 'Indeterminate form.' },
            { tex: '\\frac{1}{x} - \\frac{1}{3} = \\frac{3 - x}{3x}', why: 'Common denominator $3x$.' },
            { tex: '\\lim_{x \\to 3} \\frac{3 - x}{3x(x - 3)}', why: 'Dividing by $(x - 3)$ multiplies the denominator by it.' },
            { tex: '= \\lim_{x \\to 3} \\frac{-(x - 3)}{3x(x - 3)} = \\lim_{x \\to 3} \\frac{-1}{3x}', why: 'Write $3 - x = -(x - 3)$, then cancel. Missing this sign is the classic error.' },
            { tex: '= -\\frac{1}{9}', why: 'Substitute $x = 3$.' },
          ],
          result: 'The limit is $-\\frac{1}{9}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rationalizing fixes floating-point bugs too',
          text: 'The expression $\\frac{\\sqrt{x^2 + 9} - 3}{x^2}$ (the derivation above with $x^2$ in place of $x$) suffers *catastrophic cancellation* in code: for tiny $x$, $\\sqrt{x^2 + 9}$ and $3$ agree to every stored digit, and the subtraction returns garbage or $0$. The rationalized form $\\frac{1}{\\sqrt{x^2 + 9} + 3}$ has no subtraction of nearly equal numbers and stays accurate. Numerical libraries rewrite formulas like this all the time — the same algebra, for a different reason.',
        },
        {
          type: 'code',
          title: 'cancellation.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double xs[] = {1e-1, 1e-3, 1e-5, 1e-7, 1e-8};
    for (double x : xs) {
        double naive  = (std::sqrt(x * x + 9) - 3) / (x * x);
        double stable = 1 / (std::sqrt(x * x + 9) + 3);
        std::printf("x = %.0e  naive = %.10f  rationalized = %.10f\\n", x, naive, stable);
    }
}`,
          output: `x = 1e-01  naive = 0.1666203961  rationalized = 0.1666203961
x = 1e-03  naive = 0.1666666618  rationalized = 0.1666666620
x = 1e-05  naive = 0.1666666805  rationalized = 0.1666666667
x = 1e-07  naive = 0.1776356839  rationalized = 0.1666666667
x = 1e-08  naive = 0.0000000000  rationalized = 0.1666666667`,
          annotations: [
            { lines: 7, text: 'The original formula: subtracts two nearly equal numbers when $x$ is small.' },
            { lines: 8, text: 'The algebraically equivalent rationalized formula (valid for $x \\ne 0$).' },
            { lines: 9, text: 'At $x = 10^{-8}$, $x^2 + 9$ rounds to exactly $9$, so the naive numerator is $0$. The true limit is $\\frac{1}{6} \\approx 0.1666666667$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Evaluate the limit.',
      tex: '\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}',
      hint: 'Multiply top and bottom by $\\sqrt{x} + 2$. (Or notice $x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$ for $x \\ge 0$.)',
      label: 'limit $=$',
      answer: '1/4',
      answerTex: '\\frac{1}{4}',
      explanation: 'Substitution gives $\\frac{0}{0}$. Multiply by the conjugate: $\\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{(x - 4)(\\sqrt{x} + 2)} = \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\frac{1}{\\sqrt{x} + 2}$ for $x \\ne 4$. As $x \\to 4$ this approaches $\\frac{1}{2 + 2} = \\frac{1}{4}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'expr',
      prompt: 'Let $f(x) = x^2 + 3x$. Evaluate the following limit; your answer will be an expression in $x$ (treat $x$ as a fixed number while $h \\to 0$).',
      tex: '\\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h} = \\lim_{h \\to 0} \\frac{(x + h)^2 + 3(x + h) - (x^2 + 3x)}{h}',
      hint: 'Expand $(x + h)^2 = x^2 + 2xh + h^2$. Everything without an $h$ cancels; then factor $h$ out of the numerator.',
      label: 'limit $=$',
      answer: '2x + 3',
      answerTex: '2x + 3',
      explanation: 'Numerator: $x^2 + 2xh + h^2 + 3x + 3h - x^2 - 3x = 2xh + h^2 + 3h = h(2x + h + 3)$. Cancel $h$ (allowed since $h \\ne 0$): the expression is $2x + h + 3$, which approaches $2x + 3$ as $h \\to 0$. This is a $\\frac{0}{0}$ limit solved by expanding and cancelling — and it computes the slope of $y = x^2 + 3x$ at any point $x$. In Unit 3 this limit gets a name: the derivative.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'A strategy for any limit at a point',
      blocks: [
        {
          type: 'p',
          text: 'Put together, the last three lessons give a dependable procedure for $\\lim_{x \\to a} f(x)$ when $a$ is a finite number.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Substitute', text: 'Plug in $x = a$. If you get an ordinary number (and $f$ is built from familiar functions defined at $a$), that number is the limit.' },
            { title: 'Nonzero over zero?', text: 'Then the limit is infinite or does not exist. Check the sign on each side to find $\\lim_{x \\to a^\\pm} f(x)$.' },
            { title: 'Zero over zero?', text: 'Indeterminate. Simplify: **factor** polynomials, **rationalize** square roots, **combine** fractions inside fractions. Cancel the factor causing the zero, then go back to step 1.' },
            { title: 'Piecewise or absolute value?', text: 'Compute the left- and right-hand limits separately using the correct formula on each side, and compare.' },
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Loses marks',
            tone: 'bad',
            tex: ['\\frac{x^2 - 1}{x - 1} = \\frac{0}{0} = x + 1 = 2'],
            text: 'Writes $\\frac{0}{0}$ as if it were a value, drops the "lim", and chains unequal things with $=$.',
          },
          right: {
            title: 'Full marks',
            tone: 'good',
            tex: ['\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\lim_{x \\to 1} \\frac{(x - 1)(x + 1)}{x - 1}', '= \\lim_{x \\to 1} (x + 1) = 2'],
            text: 'Keeps "$\\lim$" on every line until the substitution step; mentions $\\frac{0}{0}$ in words, not in the equation chain.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors grade the notation. Write $\\lim_{x \\to a}$ on every line until you actually substitute, and never put "$= \\frac{0}{0}$" inside a chain of equalities — $\\frac{0}{0}$ is a signal to do more work, not a quantity that equals anything.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Coming up',
          text: 'Some $\\frac{0}{0}$ limits resist all three techniques, like $\\lim_{x \\to 0} \\frac{\\sin x}{x}$. The next lesson handles those with the Squeeze Theorem, and much later L\'Hôpital\'s rule gives a derivative-based shortcut.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'You substitute $x = a$ into a limit and get $\\frac{0}{0}$. What can you conclude?',
      options: [
        {
          text: 'The limit is $0$',
          why: 'A zero numerator only gives $0$ when the denominator stays away from $0$. Here both shrink, and the answer could be anything — see $\\frac{5x}{x} \\to 5$.',
        },
        {
          text: 'The limit does not exist',
          why: '$\\frac{x^2 - 1}{x - 1}$ gives $\\frac{0}{0}$ at $1$ and its limit is $2$. Many $\\frac{0}{0}$ limits exist.',
        },
        {
          text: 'The limit is $1$, because anything divided by itself is $1$',
          why: '$0$ divided by $0$ is not "itself over itself"; the numerator and denominator shrink at possibly different rates. $\\frac{x^2}{x} \\to 0$, for example.',
        },
        {
          text: 'Nothing yet: simplify the expression algebraically and try again',
          correct: true,
          why: '$\\frac{0}{0}$ is an indeterminate form. It tells you which tool to reach for (factor, rationalize, combine), not what the answer is.',
        },
      ],
      explanation: 'The four limits $\\frac{5x}{x}$, $\\frac{x^2}{x}$, $\\frac{x}{x^3}$ and $\\frac{|x|}{x}$ all give $\\frac{0}{0}$ at $x = 0$, yet their limits are $5$, $0$, $\\infty$ and "does not exist". The form alone cannot decide; only further algebra (or a more powerful tool) can.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the lines of this solution in order: $\\lim\\limits_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x}$.',
      lines: [
        '$\\lim\\limits_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x} \\cdot \\dfrac{\\sqrt{x + 4} + 2}{\\sqrt{x + 4} + 2}$',
        '$= \\lim\\limits_{x \\to 0} \\dfrac{(x + 4) - 4}{x\\left(\\sqrt{x + 4} + 2\\right)}$',
        '$= \\lim\\limits_{x \\to 0} \\dfrac{x}{x\\left(\\sqrt{x + 4} + 2\\right)}$',
        '$= \\lim\\limits_{x \\to 0} \\dfrac{1}{\\sqrt{x + 4} + 2}$',
        '$= \\dfrac{1}{4}$',
      ],
      distractors: ['$= \\lim\\limits_{x \\to 0} \\dfrac{\\sqrt{x} + \\sqrt{4} - 2}{x}$'],
      explanation: 'Multiply by the conjugate, use $(A - B)(A + B) = A^2 - B^2$ on the top, simplify to expose the factor $x$, cancel it, and only then substitute: $\\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4}$. The distractor uses $\\sqrt{x + 4} = \\sqrt{x} + \\sqrt{4}$, which is false (try $x = 5$: $\\sqrt{9} = 3$ but $\\sqrt{5} + 2 \\approx 4.24$).',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'If $\\lim_{x \\to a} [f(x) + g(x)]$ exists, then $\\lim_{x \\to a} f(x)$ and $\\lim_{x \\to a} g(x)$ must both exist.',
      answer: false,
      explanation: 'The sum law only works in one direction: if the pieces have limits, so does the sum. The converse fails. Take $f(x) = \\frac{1}{x}$ and $g(x) = -\\frac{1}{x}$ at $a = 0$: neither has a limit, but $f(x) + g(x) = 0$ for all $x \\ne 0$, so $\\lim_{x \\to 0}[f(x) + g(x)] = 0$. This is why the laws always say "if $\\lim f$ and $\\lim g$ exist".',
    },
  ],
  takeaways: [
    'Limit laws: limits respect sums, differences, constant multiples, products, powers, roots, and quotients when the denominator\'s limit is not $0$ — provided the individual limits exist.',
    'Direct substitution: for polynomials, rational functions (denominator $\\ne 0$) and other familiar functions on their domains, $\\lim_{x \\to a} f(x) = f(a)$.',
    '$\\frac{0}{0}$ is indeterminate: it signals more work, not an answer. Nonzero over zero signals an infinite limit.',
    'Rescue $\\frac{0}{0}$ by factoring and cancelling, multiplying by a conjugate, or combining fractions; cancelling is legal because $x \\ne a$ inside the limit.',
    'Keep "$\\lim$" on every line until you substitute, and never write "$= \\frac{0}{0}$" in an equation chain.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 2.3 The Limit Laws',
      url: 'https://openstax.org/books/calculus-volume-1/pages/2-3-the-limit-laws',
      source: 'openstax',
      note: 'The laws with proofs sketched, plus many factoring, rationalizing and complex-fraction examples.',
    },
    {
      title: "Paul's Online Notes — Limit Properties",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties.aspx',
      source: 'paul',
      note: 'Each law stated carefully, with the direct substitution property.',
    },
    {
      title: "Paul's Online Notes — Computing Limits",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ComputingLimits.aspx',
      source: 'paul',
      note: 'Lots of worked 0/0 examples, including piecewise functions.',
    },
    {
      title: 'Wikipedia — Catastrophic cancellation',
      url: 'https://en.wikipedia.org/wiki/Catastrophic_cancellation',
      source: 'wikipedia',
      note: 'Why subtracting nearly equal floating-point numbers destroys precision, and how rewriting formulas fixes it.',
    },
  ],
};
